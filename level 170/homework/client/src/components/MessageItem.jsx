import { useState } from "react";
import { formatTime } from "../utils/formatTime";

const MessageItem = ({ message, isOwn, canDelete, onEdit, onDelete }) => {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState(message.content);

    const startEditing = () => {
        setDraft(message.content);
        setEditing(true);
    }

    const save = async (e) => {
        e.preventDefault();

        const content = draft.trim();

        if (!content || content === message.content) {
            setEditing(false);
            return;
        }

        const done = await onEdit(message._id, content);

        if (done) setEditing(false);
    }

    return (
        <div className={`message${isOwn ? " own" : ""}`}>
            {!isOwn && <span className="message-avatar">{message.sender?.name?.[0]?.toUpperCase() || "?"}</span>}

            <div className="message-body">
                <div className="message-meta">
                    <span className="message-sender">{isOwn ? "You" : message.sender?.name || "Unknown user"}</span>
                    <span className="message-time">{formatTime(message.createdAt)}</span>
                    {message.edited && <span className="message-edited">edited</span>}
                </div>

                {
                    editing ? (
                        <form className="message-edit" onSubmit={save}>
                            <input
                                type="text"
                                value={draft}
                                autoFocus
                                onChange={(e) => setDraft(e.target.value)}
                                onKeyDown={(e) => e.key === "Escape" && setEditing(false)}
                            />
                            <button type="submit" className="btn btn-small btn-primary">Save</button>
                            <button type="button" className="btn btn-small btn-ghost" onClick={() => setEditing(false)}>
                                Cancel
                            </button>
                        </form>
                    ) : (
                        <p className="message-content">{message.content}</p>
                    )
                }

                {
                    !editing && (isOwn || canDelete) && (
                        <div className="message-actions">
                            {isOwn && (
                                <button type="button" className="link-btn" onClick={startEditing}>Edit</button>
                            )}
                            <button type="button" className="link-btn danger" onClick={() => onDelete(message._id)}>
                                Delete
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MessageItem;
