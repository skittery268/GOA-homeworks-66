import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { useMessage } from "../hooks/useMessage";
import { useAuth } from "../hooks/useAuth";
import { useGroups } from "../hooks/useGroups";
import { useToast } from "../hooks/useToast";
import { fetchGroup } from "../services/GroupService";
import { getErrorMessage } from "../utils/getErrorMessage";
import { formatDay } from "../utils/formatTime";
import { socket } from "../config/socket";
import MessageItem from "../components/MessageItem";
import TypingIndicator from "../components/TypingIndicator";
import Loader from "../components/Loader";

const Group = () => {
    const { groupId } = useParams();
    const {
        messages,
        typingUsers,
        onlineMembers,
        loading,
        sending,
        getGroupMessages,
        sendMessage,
        editMessage,
        deleteMessage,
        enterGroupChat,
        leaveGroupChat,
        notifyTyping,
        stopTyping
    } = useMessage();
    const { user } = useAuth();
    const { leaveGroup, deleteGroup, updateGroup } = useGroups();
    const toast = useToast();
    const navigate = useNavigate();

    const [group, setGroup] = useState(null);
    const [groupLoading, setGroupLoading] = useState(true);
    const [content, setContent] = useState("");
    const [filter, setFilter] = useState("");
    const [renaming, setRenaming] = useState(false);
    const [titleDraft, setTitleDraft] = useState("");

    const listRef = useRef(null);
    const bottomRef = useRef(null);
    const stickToBottomRef = useRef(true);

    const isAdmin = (group?.admin?._id || group?.admin) === user?._id;

    useEffect(() => {
        enterGroupChat(groupId);

        return () => leaveGroupChat(groupId);
    }, [groupId, enterGroupChat, leaveGroupChat]);

    useEffect(() => {
        getGroupMessages(groupId);
    }, [groupId, getGroupMessages]);

    useEffect(() => {
        let cancelled = false;

        const loadGroup = async (silent) => {
            if (!silent) setGroupLoading(true);

            try {
                const res = await fetchGroup(groupId);

                if (cancelled) return;

                setGroup(res.data.data.group);
            } catch (err) {
                if (cancelled || silent) return;

                toast.error(getErrorMessage(err, "Could not open this group!"));
                navigate("/groups", { replace: true });
            } finally {
                if (!cancelled && !silent) setGroupLoading(false);
            }
        }

        loadGroup(false);

        // Somebody joined, left or renamed the group: refresh the member list.
        const handleGroupUpdated = (updated) => {
            if (updated?._id !== groupId) return;

            loadGroup(true);
        }

        const handleGroupDeleted = ({ groupId: deletedId }) => {
            if (deletedId !== groupId) return;

            toast.notify("This group was deleted.");
            navigate("/groups", { replace: true });
        }

        socket.on("groupUpdated", handleGroupUpdated);
        socket.on("groupDeleted", handleGroupDeleted);

        return () => {
            cancelled = true;
            socket.off("groupUpdated", handleGroupUpdated);
            socket.off("groupDeleted", handleGroupDeleted);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupId]);

    // Follow new messages, but do not yank the view away while reading history.
    useEffect(() => {
        if (stickToBottomRef.current) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }, [messages, typingUsers]);

    const handleScroll = () => {
        const list = listRef.current;

        if (!list) return;

        const distance = list.scrollHeight - list.scrollTop - list.clientHeight;

        stickToBottomRef.current = distance < 120;
    }

    const visibleMessages = useMemo(() => {
        const term = filter.trim().toLowerCase();

        if (!term) return messages;

        return messages.filter((message) => (
            message.content.toLowerCase().includes(term) ||
            message.sender?.name?.toLowerCase().includes(term)
        ));
    }, [messages, filter]);

    const onSend = async (e) => {
        e.preventDefault();

        const trimmed = content.trim();

        if (!trimmed || sending) return;

        stickToBottomRef.current = true;

        const sent = await sendMessage(groupId, { content: trimmed });

        if (sent) setContent("");
    }

    const onContentChange = (e) => {
        setContent(e.target.value);

        if (e.target.value.trim()) {
            notifyTyping(groupId);
        } else {
            stopTyping(groupId);
        }
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            onSend(e);
        }
    }

    const handleDeleteMessage = async (messageId) => {
        if (!window.confirm("Delete this message?")) return;

        await deleteMessage(messageId);
    }

    const handleLeave = async () => {
        if (!window.confirm(`Leave "${group.title}"?`)) return;

        const left = await leaveGroup(groupId);

        if (left) navigate("/groups");
    }

    const handleDeleteGroup = async () => {
        if (!window.confirm(`Delete "${group.title}" with all of its messages?`)) return;

        const deleted = await deleteGroup(groupId);

        if (deleted) navigate("/groups");
    }

    const handleRename = async (e) => {
        e.preventDefault();

        const title = titleDraft.trim();

        if (!title || title === group.title) {
            setRenaming(false);
            return;
        }

        const updated = await updateGroup(groupId, { title });

        if (updated) {
            setGroup((prev) => ({ ...prev, title }));
            setRenaming(false);
        }
    }

    if (groupLoading) return <Loader label="Opening the chat..." />;
    if (!group) return null;

    const onlineIds = new Set(onlineMembers.map((member) => member.id));
    let lastDay = null;

    return (
        <div className="page chat-page">
            <div className="chat-layout">
                <section className="card chat">
                    <header className="chat-head">
                        <div className="chat-head-main">
                            <Link className="back-link" to="/groups">←</Link>
                            <span className="group-avatar">{group.title?.[0]?.toUpperCase()}</span>

                            <div>
                                {
                                    renaming ? (
                                        <form className="rename-form" onSubmit={handleRename}>
                                            <input
                                                type="text"
                                                value={titleDraft}
                                                autoFocus
                                                maxLength={50}
                                                onChange={(e) => setTitleDraft(e.target.value)}
                                                onKeyDown={(e) => e.key === "Escape" && setRenaming(false)}
                                            />
                                            <button type="submit" className="btn btn-small btn-primary">Save</button>
                                        </form>
                                    ) : (
                                        <h2>
                                            {group.title}
                                            {isAdmin && (
                                                <button
                                                    type="button"
                                                    className="link-btn"
                                                    onClick={() => { setTitleDraft(group.title); setRenaming(true) }}
                                                >
                                                    rename
                                                </button>
                                            )}
                                        </h2>
                                    )
                                }
                                <p className="muted small">
                                    {group.members.length} {group.members.length === 1 ? "member" : "members"}
                                    <span className="dot-separator">•</span>
                                    <span className="online-count">{onlineMembers.length} online</span>
                                </p>
                            </div>
                        </div>

                        <div className="chat-head-actions">
                            <input
                                type="search"
                                className="chat-filter"
                                placeholder="Filter messages..."
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            {
                                isAdmin
                                    ? <button type="button" className="btn btn-danger" onClick={handleDeleteGroup}>Delete</button>
                                    : <button type="button" className="btn btn-ghost" onClick={handleLeave}>Leave</button>
                            }
                        </div>
                    </header>

                    <div className="messages" ref={listRef} onScroll={handleScroll}>
                        {loading && !messages.length && <Loader label="Loading messages..." />}

                        {!loading && !messages.length && (
                            <div className="empty-state">
                                <h3>No messages yet</h3>
                                <p className="muted">Say hello and start the conversation.</p>
                            </div>
                        )}

                        {!!messages.length && !visibleMessages.length && (
                            <div className="empty-state">
                                <p className="muted">No message matches "{filter}".</p>
                            </div>
                        )}

                        {
                            visibleMessages.map((message) => {
                                const day = formatDay(message.createdAt);
                                const showDay = day !== lastDay;

                                lastDay = day;

                                return (
                                    <div key={message._id}>
                                        {showDay && <div className="day-separator"><span>{day}</span></div>}

                                        <MessageItem
                                            message={message}
                                            isOwn={(message.sender?._id || message.sender) === user?._id}
                                            canDelete={isAdmin}
                                            onEdit={editMessage}
                                            onDelete={handleDeleteMessage}
                                        />
                                    </div>
                                )
                            })
                        }

                        <div ref={bottomRef} />
                    </div>

                    <TypingIndicator users={typingUsers} />

                    <form className="composer" onSubmit={onSend}>
                        <textarea
                            name="content"
                            rows={1}
                            placeholder="Write a message... (Enter to send, Shift+Enter for a new line)"
                            value={content}
                            maxLength={2000}
                            onChange={onContentChange}
                            onKeyDown={onKeyDown}
                            onBlur={() => stopTyping(groupId)}
                        />
                        <button type="submit" className="btn btn-primary" disabled={!content.trim() || sending}>
                            {sending ? "..." : "Send"}
                        </button>
                    </form>
                </section>

                <aside className="card members">
                    <h3>Members</h3>
                    <ul>
                        {
                            group.members.map((member) => (
                                <li key={member._id}>
                                    <span className="avatar small">{member.name?.[0]?.toUpperCase()}</span>
                                    <span className="member-name">
                                        {member.name}
                                        {member._id === user?._id && " (you)"}
                                    </span>
                                    {(group.admin?._id || group.admin) === member._id && <span className="badge">admin</span>}
                                    <span className={`status-dot${onlineIds.has(member._id) ? " online" : ""}`} />
                                </li>
                            ))
                        }
                    </ul>
                </aside>
            </div>
        </div>
    )
}

export default Group;
