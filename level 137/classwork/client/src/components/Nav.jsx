import { Link } from "react-router";
import { useAuth } from "../context/auth.context";

const Nav = () => {
    const { user } = useAuth();

    return (
        <nav>
            <ul>
                {
                    user ? (
                        <>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/profile"}>Profile</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/register"}>Register</Link></li>
                            <li><Link to={"/login"}>Login</Link></li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Nav;