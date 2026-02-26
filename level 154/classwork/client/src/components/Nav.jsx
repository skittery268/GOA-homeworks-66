import { useAuth } from "../context/AuthContext";

const Nav = () => {
    const { user } = useAuth();

    return (
        <nav>
            <ul>
                {
                    user.role === "admin" && <li><Link to="/admin">Admin</Link></li>
                }
                {
                    user ? (
                        <>
                            <li><Link to="/products">Shop</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Nav;