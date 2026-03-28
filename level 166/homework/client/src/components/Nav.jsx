import { Link, NavLink } from "react-router"
import { useAuth } from "../hooks/useAuth";

const Nav = () => {
    const { user, logout } = useAuth();

    const navLinkClass = ({ isActive }) =>
        `rounded-full px-4 py-2 text-sm font-semibold transition ${
            isActive
                ? "bg-slate-900 text-white shadow"
                : "text-slate-700 hover:bg-slate-100"
        }`;

    return (
        <header className="sticky top-4 z-10 rounded-2xl border border-white/60 bg-white/70 p-3 shadow-lg shadow-slate-300/40 backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link to={user ? "/profile" : "/login"} className="text-lg font-extrabold tracking-tight text-slate-900">
                    ChatSpace
                </Link>

                <nav>
                    <ul className="flex flex-wrap items-center gap-2">
                        {user ? (
                            <>
                                <li>
                                    <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/users" className={navLinkClass}>Users</NavLink>
                                </li>
                                <li>
                                    <button
                                        onClick={logout}
                                        className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-600"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login" className={navLinkClass}>Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" className={navLinkClass}>Register</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav;