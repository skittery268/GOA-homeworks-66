import { Link } from "react-router";
import { useMessages } from "../hooks/useMessages";

const Users = () => {
    const { users } = useMessages();

    return (
        <section className="space-y-4">
            <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Users</h2>
                <p className="mt-1 text-sm text-slate-500">Choose a person to open the chat.</p>
            </div>

            {users.length === 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-sm text-slate-500">
                    No users found.
                </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => {
                    return (
                        <div key={user._id} className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-lg shadow-slate-200/70">
                            <h3 className="text-lg font-bold text-slate-900">{user.fullname}</h3>
                            <p className="mt-1 text-sm text-slate-500">{user.email}</p>

                            <Link
                                to={`/chat/${user._id}`}
                                className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                            >
                                Open Chat
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Users;