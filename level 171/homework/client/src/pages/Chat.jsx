import { useNavigate, useParams } from "react-router"
import { useForm } from "../hooks/useForm";
import { useMessage } from "../hooks/useMessages";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";

const Chat = () => {
    const { chatId, userId } = useParams();
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        content: ""
    })
    const navigate = useNavigate();

    const { sendMessage, leaveChat, joinChat, messages } = useMessage();
    const { user } = useAuth();
    const { receiver, getUser } = useUser();

    useEffect(() => {
        if (chatId === "new") return;
        getUser(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    useEffect(() => {
        if (chatId === "new") return;

        joinChat(chatId);

        return () => {
            leaveChat(chatId);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatId])

    const handleSendMessage = async (data) => {
        const id = await sendMessage(data, userId);
        navigate(`/chat/${id}/${userId}`);
    }

    const messageInput = (onSubmit) => (
        <form
            onSubmit={(e) => { handleSubmit(e, onSubmit); resetForm() }}
            className="flex gap-2"
        >
            <input
                type="text" name="content" placeholder="Send message..."
                value={formData.content} onChange={handleChange}
                className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-5 py-2.5"
            >
                Send
            </button>
        </form>
    );

    if (chatId === "new") {
        return (
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">New Chat</h1>
                {messageInput(handleSendMessage)}
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-900">
                {receiver?.name || "Chat"}
            </h1>
            <div className="flex flex-col gap-3 min-h-75 max-h-[60vh] overflow-y-auto bg-white border border-gray-200 rounded-xl p-4">
                {
                    messages.map((msg, index) => {
                        const isOwn = msg.senderId._id.toString() === user._id.toString();
                        const senderName = isOwn ? "You" : (receiver?.name || "Them");
                        return (
                            <div
                                key={index}
                                className={`flex flex-col gap-1 max-w-[70%] ${isOwn ? "self-end items-end" : "self-start items-start"}`}
                            >
                                <span className="text-xs text-gray-400 px-1">{senderName}</span>
                                <div className={`rounded-xl px-4 py-2.5 text-sm ${isOwn ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-900"}`}>
                                    {msg.content}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            {messageInput((data) => sendMessage(data, userId))}
        </div>
    )
}

export default Chat;