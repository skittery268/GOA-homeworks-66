const buildLabel = (users) => {
    const names = users.map((user) => user.name);

    if (names.length === 1) return `${names[0]} is typing`;
    if (names.length === 2) return `${names[0]} and ${names[1]} are typing`;

    return `${names[0]}, ${names[1]} and ${names.length - 2} more are typing`;
}

const TypingIndicator = ({ users }) => {
    if (!users?.length) return <div className="typing-indicator placeholder" />;

    return (
        <div className="typing-indicator">
            <span className="dots"><i /><i /><i /></span>
            <span>{buildLabel(users)}</span>
        </div>
    )
}

export default TypingIndicator;
