import { Link, NavLink } from "react-router"
import { useAuth } from "../hooks/useAuth";

const Nav = () => {
    const { user, logout } = useAuth();

    const linkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

    return (
        <header className="nav">
            <div className="nav-inner">
                <Link className="brand" to="/">
                    <span className="brand-mark">💬</span>
                    <span>Chatty</span>
                </Link>

                <nav className="nav-links">
                    <NavLink className={linkClass} to="/">Home</NavLink>
                    {
                        user ? (
                            <>
                                <NavLink className={linkClass} to="/groups">Groups</NavLink>
                                <NavLink className={linkClass} to="/profile">Profile</NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink className={linkClass} to="/login">Login</NavLink>
                                <NavLink className={linkClass} to="/register">Register</NavLink>
                            </>
                        )
                    }
                </nav>

                {
                    user && (
                        <div className="nav-user">
                            <span className="avatar" title={user.name}>{user.name?.[0]?.toUpperCase()}</span>
                            <span className="nav-user-name">{user.name}</span>
                            <button type="button" className="btn btn-ghost" onClick={logout}>Log out</button>
                        </div>
                    )
                }
            </div>
        </header>
    )
}

export default Nav;
