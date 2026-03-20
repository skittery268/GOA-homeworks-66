import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <h1 className="text-xl font-display font-bold text-ink tracking-tight">
                    Social<span className="text-coral">Book</span>
                </h1>

                <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal to-teal/60 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                            {user.fullname?.charAt(0).toUpperCase()}
                        </span>
                    </div>

                    <button
                        onClick={logout}
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
