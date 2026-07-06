import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Nav = () => {
    const { user, logout } = useAuth();

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                {
                    user ? (
                        <>
                            <Link to="/profile">Profile</Link>
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )
                }
            </nav>
        </>
    );
};

export default Nav;