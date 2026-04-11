import { useEffect, useMemo } from "react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useChat } from "../hooks/useChat"
import { useUser } from "../hooks/useUser";

const Chats = () => {
    const { getUserChats, userChats } = useChat();
    const { getAllUsers, users } = useUser();
    const { user } = useAuth();

    useEffect(() => {
        getUserChats();
        getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const usersById = useMemo(() => {
        return users.reduce((acc, currentUser) => {
            acc[currentUser._id?.toString()] = currentUser;
            return acc;
        }, {});
    }, [users]);

    const getReceiverId = (chat) => {
        const members = chat?.members || [];
        const currentUserId = user?._id?.toString();

        return members.find((memberId) => memberId?.toString() !== currentUserId)?.toString();
    }

    return (
        <section className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Chats</h1>
            {userChats.length === 0 && (
                <p className="text-gray-500">You do not have chats yet. <Link to="/users" className="text-indigo-600 hover:text-indigo-700 underline">Start from users list</Link>.</p>
            )}

            <div className="flex flex-col gap-3">
                {
                    userChats.map((chat) => {
                        const receiverId = getReceiverId(chat);
                        const receiver = receiverId ? usersById[receiverId] : null;

                        return (
                            <div key={chat._id} className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-indigo-400">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                                        {receiver?.name?.[0]?.toUpperCase() || "?"}
                                    </div>
                                    <span className="text-gray-900 font-medium">{receiver?.name || "Unknown user"}</span>
                                </div>
                                {
                                    receiverId ? (
                                        <Link
                                            to={`/chat/${chat._id}/${receiverId}`}
                                            className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-4 py-2"
                                        >
                                            Open chat
                                        </Link>
                                    ) : (
                                        <span className="text-gray-400 text-sm">Receiver is unavailable</span>
                                    )
                                }
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Chats