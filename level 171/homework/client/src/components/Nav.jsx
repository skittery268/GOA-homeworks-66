import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium ${
        isActive
            ? "bg-indigo-600 text-white"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

const Nav = () => {
    const { user, logout } = useAuth();

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
                <span className="text-indigo-600 font-bold text-lg tracking-wide">ChatApp</span>
                <ul className="flex items-center gap-2">
                    {
                        user ? (
                            <>
                                <li><NavLink to="/profile" className={navLinkClass}>Profile</NavLink></li>
                                <li><NavLink to="/chats" className={navLinkClass}>Chats</NavLink></li>
                                <li><NavLink to="/users" className={navLinkClass}>Users</NavLink></li>
                                <li>
                                    <button
                                        onClick={logout}
                                        className="px-4 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-700"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/register" className={navLinkClass}>Register</NavLink></li>
                                <li><NavLink to="/login" className={navLinkClass}>Login</NavLink></li>
                            </>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Nav;