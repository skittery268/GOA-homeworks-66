import { Link } from "react-router";
import { useAuth } from "../context/auth.context";

const Nav = () => {
    const user = JSON.parse(localStorage.getItem("thisUser"));

    const { logOut } = useAuth();
    
    return (
        <nav>
            { !user && <Link to={"/register"}>Register</Link> }
            { !user && <br /> }
            { !user && <Link to={"/login"}>Login</Link> }
            { !user && <br /> }
            { user && <Link to={"/profile"}>Profile</Link> }
            { user && <br /> }
            { user && <button onClick={logOut}>Log Out</button> }
        </nav>
    )
}

export default Nav;