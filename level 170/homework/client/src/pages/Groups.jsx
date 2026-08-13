import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useGroups } from "../hooks/useGroups";
import { useAuth } from "../hooks/useAuth";
import CreateGroup from "../components/CreateGroup";
import GroupCard from "../components/GroupCard";
import Loader from "../components/Loader";

const Groups = () => {
    const { groups, myGroups, search, setSearch, loading, isMember, joinGroup, leaveGroup, deleteGroup } = useGroups();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [tab, setTab] = useState("my");
    const [busyId, setBusyId] = useState(null);

    const visibleGroups = useMemo(() => (tab === "my" ? myGroups : groups), [tab, myGroups, groups]);

    const handleJoin = async (group) => {
        setBusyId(group._id);

        const joined = await joinGroup(group._id);

        setBusyId(null);

        if (joined) navigate(`/group/${group._id}`);
    }

    const handleLeave = async (group) => {
        if (!window.confirm(`Leave "${group.title}"?`)) return;

        setBusyId(group._id);
        await leaveGroup(group._id);
        setBusyId(null);
    }

    const handleDelete = async (group) => {
        if (!window.confirm(`Delete "${group.title}" with all of its messages?`)) return;

        setBusyId(group._id);
        await deleteGroup(group._id);
        setBusyId(null);
    }

    return (
        <div className="page">
            <div className="page-head">
                <div>
                    <h1>Groups</h1>
                    <p className="muted">Find a chat by its name, no group id needed.</p>
                </div>

                <div className="search">
                    <span className="search-icon">🔍</span>
                    <input
                        type="search"
                        placeholder="Search groups by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                        <button type="button" className="search-clear" onClick={() => setSearch("")}>×</button>
                    )}
                </div>
            </div>

            <div className="groups-layout">
                <section>
                    <div className="tabs">
                        <button
                            type="button"
                            className={`tab${tab === "my" ? " active" : ""}`}
                            onClick={() => setTab("my")}
                        >
                            My groups <span className="count">{myGroups.length}</span>
                        </button>
                        <button
                            type="button"
                            className={`tab${tab === "all" ? " active" : ""}`}
                            onClick={() => setTab("all")}
                        >
                            Discover <span className="count">{groups.length}</span>
                        </button>
                    </div>

                    {loading && !visibleGroups.length && <Loader label="Loading groups..." />}

                    {!loading && !visibleGroups.length && (
                        <div className="empty-state card">
                            <h3>{search ? "Nothing found" : "No groups yet"}</h3>
                            <p className="muted">
                                {
                                    search
                                        ? `No group name matches "${search}".`
                                        : tab === "my"
                                            ? "Join a group from the Discover tab or create your own."
                                            : "Be the first one to create a group."
                                }
                            </p>
                        </div>
                    )}

                    <div className="group-grid">
                        {
                            visibleGroups.map((group) => (
                                <GroupCard
                                    key={group._id}
                                    group={group}
                                    isMember={isMember(group)}
                                    isAdmin={(group.admin?._id || group.admin) === user?._id}
                                    busy={busyId === group._id}
                                    onOpen={() => navigate(`/group/${group._id}`)}
                                    onJoin={() => handleJoin(group)}
                                    onLeave={() => handleLeave(group)}
                                    onDelete={() => handleDelete(group)}
                                />
                            ))
                        }
                    </div>
                </section>

                <aside>
                    <CreateGroup />
                </aside>
            </div>
        </div>
    )
}

export default Groups;
