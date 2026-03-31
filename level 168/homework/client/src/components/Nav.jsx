import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth"

const Nav = () => {
    const { user, logout } = useAuth();

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    {
                        user ? (
                            <>
                                <li><Link to={"/profile"}>Profile</Link></li>
                                <li><Link to={"/messages"}>Messages</Link></li>
                                <li><button onClick={logout}>Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><Link to={"/login"}>Login</Link></li>
                                <li><Link to={"/register"}>Register</Link></li>
                            </>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Nav;