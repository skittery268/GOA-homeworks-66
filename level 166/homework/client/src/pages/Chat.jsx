import { useParams } from "react-router";
import { useMessages } from "../hooks/useMessages";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { useAuth } from "../hooks/useAuth";

const Chat = () => {
    const { userId } = useParams();
    const { user } = useAuth();
    const [formData, handleChange, handleSubmit, resetForm] = useForm({ content: "" });

    const { messages, sendMessage, getMessages } = useMessages();

    useEffect(() => {
        getMessages(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    const handleSendMessage = (data) => {
        sendMessage({ ...data, receiverId: userId });
    }

    return (
        <section className="mx-auto flex w-full max-w-3xl flex-col gap-4">
            <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-xl shadow-slate-200/80 backdrop-blur sm:p-6">
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Chat</h2>
                <p className="mt-1 text-sm text-slate-500">Simple, fast and focused conversation.</p>

                <div className="mt-5 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    {messages.length === 0 && (
                        <p className="text-sm text-slate-500">No messages yet. Send the first one.</p>
                    )}

                    {messages.map((message, index) => {

                        return (
                            <div key={message._id || index} className={`flex ${message.senderId === user._id ? "justify-end" : "justify-start"}`}>
                                <p className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${message.senderId === user._id ? "bg-slate-900 text-white" : "bg-white text-slate-800 border border-slate-200"}`}>
                                    {message.content}
                                </p>
                            </div>
                        )
                    })}
                </div>

                <form onSubmit={(e) => { handleSubmit(e, handleSendMessage); resetForm(); }} className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <input
                        type="text"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Write a message"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-slate-400"
                    />
                    <button
                        type="submit"
                        className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Chat;