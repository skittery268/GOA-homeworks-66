import { useEffect } from "react";
import { useParams } from "react-router";
import { useMessage } from "../hooks/useMessage";
import { useForm } from "../hooks/useForm";

const Group = () => {
    const { groupId } = useParams();
    const { messages, getGroupMessages, sendMessage, enterGroupChat, leaveGroupChat } = useMessage();
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        content: ""
    })

    useEffect(() => {
        enterGroupChat(groupId);

        return () => {
            leaveGroupChat(groupId);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupId])

    useEffect(() => {
        getGroupMessages(groupId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupId])

    const onSubmit = (e) => {
        handleSubmit(e, async () => {
            if (!formData.content.trim()) return;

            await sendMessage(groupId, { content: formData.content.trim() });
            resetForm();
        });
    }

    return (
        <div>
            <h1>Group</h1>
            {
                messages.map((m, index) => {
                    return (
                        <div key={index}>
                            <p>{m.sender?.name || "Unknown user"}</p>
                            <h3>{m.content}</h3>
                        </div>
                    )
                })
            }

            <form onSubmit={onSubmit}>
                <input type="text" name="content" placeholder="Message" value={formData.content} onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Group;