import { createContext, useCallback, useEffect, useRef, useState } from "react";
import {
    fetchAllGroups,
    fetchCreateGroup,
    fetchDeleteGroup,
    fetchJoinGroup,
    fetchLeaveGroup,
    fetchUpdateGroup,
    fetchUserGroups
} from "../services/GroupService";
import { socket } from "../config/socket";
import { getErrorMessage } from "../utils/getErrorMessage";
import { useAuth } from "../hooks/useAuth";
import { useToast } from "../hooks/useToast";

// eslint-disable-next-line react-refresh/only-export-components
export const GroupsContext = createContext();

const upsert = (list, group) => {
    const exists = list.some((item) => item._id === group._id);

    return exists ? list.map((item) => (item._id === group._id ? group : item)) : [group, ...list];
}

const remove = (list, groupId) => list.filter((item) => item._id !== groupId);

export const GroupsProvider = ({ children }) => {
    const [groups, setGroups] = useState([]);
    const [myGroups, setMyGroups] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const { user } = useAuth();
    const toast = useToast();

    // Socket handlers must not close over stale search / user values.
    const searchRef = useRef(search);
    const userRef = useRef(user);

    useEffect(() => { searchRef.current = search }, [search]);
    useEffect(() => { userRef.current = user }, [user]);

    const isMember = useCallback((group) => {
        const userId = userRef.current?._id;

        if (!userId) return false;

        return (group?.members || []).some((member) => (member?._id || member) === userId);
    }, []);

    const loadGroups = useCallback(async (term) => {
        setLoading(true);

        try {
            const [allRes, myRes] = await Promise.all([fetchAllGroups(term), fetchUserGroups(term)]);

            setGroups(allRes.data.data.groups);
            setMyGroups(myRes.data.data.groups);
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not load the groups!"));
        } finally {
            setLoading(false);
        }
    }, [toast]);

    // Search by group name, debounced so every keystroke is not a request.
    useEffect(() => {
        if (!user) {
            setGroups([]);
            setMyGroups([]);

            return;
        }

        const timeout = setTimeout(() => loadGroups(search), 300);

        return () => clearTimeout(timeout);
    }, [search, user, loadGroups]);

    useEffect(() => {
        if (!user) return;

        const matchesSearch = (group) => {
            const term = searchRef.current.trim().toLowerCase();

            return !term || group.title.toLowerCase().includes(term);
        }

        const handleGroupChanged = (group) => {
            if (!group?._id) return;

            setGroups((prev) => (matchesSearch(group) ? upsert(prev, group) : remove(prev, group._id)));
            setMyGroups((prev) => (
                isMember(group) && matchesSearch(group) ? upsert(prev, group) : remove(prev, group._id)
            ));
        }

        const handleGroupDeleted = ({ groupId }) => {
            if (!groupId) return;

            setGroups((prev) => remove(prev, groupId));
            setMyGroups((prev) => remove(prev, groupId));
        }

        socket.on("groupCreated", handleGroupChanged);
        socket.on("groupUpdated", handleGroupChanged);
        socket.on("groupDeleted", handleGroupDeleted);

        return () => {
            socket.off("groupCreated", handleGroupChanged);
            socket.off("groupUpdated", handleGroupChanged);
            socket.off("groupDeleted", handleGroupDeleted);
        }
    }, [user, isMember]);

    // The socket broadcast normally keeps the lists fresh, this is the
    // fallback for when the realtime connection is not available.
    const refresh = () => loadGroups(searchRef.current);

    const createGroup = async (formData) => {
        try {
            const res = await fetchCreateGroup(formData);

            toast.success(res.data.message);
            refresh();

            return res.data.data.group;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not create the group!"));

            return null;
        }
    }

    const updateGroup = async (id, formData) => {
        try {
            const res = await fetchUpdateGroup(id, formData);

            toast.success(res.data.message);
            refresh();

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not update the group!"));

            return false;
        }
    }

    const deleteGroup = async (id) => {
        try {
            const res = await fetchDeleteGroup(id);

            toast.success(res.data.message);
            refresh();

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not delete the group!"));

            return false;
        }
    }

    const joinGroup = async (id) => {
        try {
            const res = await fetchJoinGroup(id);

            toast.success(res.data.message);
            refresh();

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not join the group!"));

            return false;
        }
    }

    const leaveGroup = async (id) => {
        try {
            const res = await fetchLeaveGroup(id);

            toast.success(res.data.message);
            refresh();

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not leave the group!"));

            return false;
        }
    }

    return (
        <GroupsContext.Provider value={{
            groups,
            myGroups,
            search,
            setSearch,
            loading,
            isMember,
            refreshGroups: refresh,
            createGroup,
            updateGroup,
            deleteGroup,
            joinGroup,
            leaveGroup
        }}>
            {children}
        </GroupsContext.Provider>
    )
}
