import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
    const { user, logout } = useAuth();
    const userInitial = user?.fullname?.charAt(0)?.toUpperCase() ?? "?";

    if (!user) {
        return null;
    }

    return (
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <h1 className="text-xl font-display font-bold text-ink tracking-tight">
                    <Link to={"/dashboard"}>Social<span className="text-coral">Book</span></Link>
                </h1>

                <Link to={"/feed"}>Feed</Link>
                <Link to={"/friends"}>Friends</Link>

                <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal to-teal/60 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                            {userInitial}
                        </span>
                    </div>

                    <button
                        onClick={logout}
                        disabled={!user}
                        className="btn-secondary text-sm"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
