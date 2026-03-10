import { Link } from "react-router";
import { useAuth } from "../../context/auth.context";

const Nav = () => {
    const { user, logOut } = useAuth();

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-3">
                <ul className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <li>
                            <Link to={'/'} className="text-xl font-semibold text-blue-700 hover:text-blue-600 transition-colors">
                                Home
                            </Link>
                        </li>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                        {user ? (
                            <>
                                <li>
                                    <button 
                                        onClick={logOut}
                                        className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors font-medium"
                                    >
                                        Logout
                                    </button>
                                </li>
                                <li>
                                    <Link to={'/profile'} className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
                                        Profile
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to={'/login'} className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/register'} className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;