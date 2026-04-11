import { Link, useParams } from "react-router"
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";

const User = () => {
    const { userId } = useParams();
    const { user, getUser } = useUser();

    useEffect(() => {
        getUser(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">User Profile</h1>
                <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                        <span className="text-gray-500 text-sm w-16">Name</span>
                        <span className="text-gray-900 font-medium">{user?.name}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                        <span className="text-gray-500 text-sm w-16">Email</span>
                        <span className="text-gray-900 font-medium">{user?.email}</span>
                    </div>
                </div>
                <Link
                    to={`/chat/new/${userId}`}
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-5 py-2.5"
                >
                    Message
                </Link>
            </div>
        </div>
    )
}

export default User