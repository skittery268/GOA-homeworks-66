const GroupCard = ({ group, isMember, isAdmin, busy, onOpen, onJoin, onLeave, onDelete }) => {
    const membersCount = group.members?.length || 0;

    return (
        <article className="card group-card">
            <div className="group-card-head">
                <span className="group-avatar">{group.title?.[0]?.toUpperCase()}</span>
                <div>
                    <h3 title={group.title}>{group.title}</h3>
                    <p className="muted small">
                        {membersCount} {membersCount === 1 ? "member" : "members"}
                        {isAdmin && <span className="badge">admin</span>}
                        {!isAdmin && isMember && <span className="badge badge-soft">joined</span>}
                    </p>
                </div>
            </div>

            {group.description && <p className="group-description">{group.description}</p>}

            <div className="group-card-actions">
                {
                    isMember ? (
                        <button type="button" className="btn btn-primary" onClick={onOpen}>Open chat</button>
                    ) : (
                        <button type="button" className="btn btn-primary" disabled={busy} onClick={onJoin}>
                            Join &amp; open
                        </button>
                    )
                }

                {isMember && !isAdmin && (
                    <button type="button" className="btn btn-ghost" disabled={busy} onClick={onLeave}>Leave</button>
                )}

                {isAdmin && (
                    <button type="button" className="btn btn-danger" disabled={busy} onClick={onDelete}>Delete</button>
                )}
            </div>
        </article>
    )
}

export default GroupCard;
