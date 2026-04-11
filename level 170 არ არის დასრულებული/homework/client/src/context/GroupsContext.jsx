import { createContext, useEffect, useState } from "react";
import { fetchAllGroups, fetchCreateGroup, fetchDeleteGroup, fetchJoinGroup, fetchUserGroups } from "../services/GroupService";

// eslint-disable-next-line react-refresh/only-export-components
export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
    const [groups, setGroups] = useState([]);
    const [userGroups, setUserGroups] = useState([]);

    useEffect(() => {
        const getAllGroups = async () => {
            try {
                const res = await fetchAllGroups();

                setGroups(res.data.data.groups);
            } catch (err) {
                console.log(err);
            }
        }
        const getUserGroups = async () => {
            try {
                const res = await fetchUserGroups();

                setUserGroups(res.data.data.groups);
            } catch (err) {
                console.log(err);
            }
        }

        getUserGroups();
        getAllGroups();
    }, [])

    const createGroup = async (formData) => {
        try {
            const res = await fetchCreateGroup(formData);

            setGroups((prev) => [...prev, res.data.data.group]);
            alert(res.data.message);
        } catch (err) {
            console.log(err);
        }
    }

    const deleteGroup = async (id) => {
        try {
            const res = await fetchDeleteGroup(id);

            setGroups((prev) => prev.filter((group) => group._id !== id));
            alert(res.data.message);
        } catch (err) {
            console.log(err);
        }
    }

    const joinGroup = async (id) => {
        try {
            const res = await fetchJoinGroup(id);

            setUserGroups((prev) => [...prev, groups.find((group) => group._id === id)]);
            alert(res.data.message);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <GroupsContext.Provider value={{ groups, userGroups, createGroup, deleteGroup, joinGroup }}>
            {children}
        </GroupsContext.Provider>
    )
}