import { Link } from "react-router"
import { useAuth } from "../context/AuthContext";

const Nav = () => {
    const { user, logOut } = useAuth();

    return (
        <header className="bg-blue-600 text-white shadow-md">
            <nav className="container mx-auto px-4 py-4 fixed bg-blue-600">
                <ul className="flex space-x-6">
                    <li><Link to={"/"} className="hover:text-blue-200 transition-colors">Home</Link></li>
                    {
                        user ? (
                            <>
                                <li><Link to={"/profile"} className="hover:text-blue-200 transition-colors">Profile</Link></li>
                                <li><Link to={"/posts"} className="hover:text-blue-200 transition-colors">Posts</Link></li>
                                <li><button onClick={logOut} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition-colors">Log out</button></li>
                            </>
                        ) : (
                            <>
                                <li><Link to={"/register"} className="hover:text-blue-200 transition-colors">Register</Link></li>
                                <li><Link to={"/login"} className="hover:text-blue-200 transition-colors">Login</Link></li>
                            </>
                        )
                    }
                </ul>
            </nav>
            <div className="h-15"></div>
        </header>
    )
}

export default Nav;