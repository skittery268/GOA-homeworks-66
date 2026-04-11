import { Link } from "react-router";
import { useUser } from "../hooks/useUser"
import { useEffect } from "react";

const Users = () => {
    const { users, getAllUsers } = useUser();

    useEffect(() => {
        getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Users</h1>
            <div className="flex flex-col gap-3">
                {
                    users.map((u, index) => {
                        return (
                            <div key={index} className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-indigo-400">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                                        {u.name?.[0]?.toUpperCase() || "?"}
                                    </div>
                                    <span className="text-gray-900 font-medium">{u.name}</span>
                                </div>
                                <Link
                                    to={`/user/${u._id}`}
                                    className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg px-4 py-2"
                                >
                                    View
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Users