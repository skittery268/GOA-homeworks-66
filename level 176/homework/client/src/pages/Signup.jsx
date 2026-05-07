import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Signup = () => {
    const { signup } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            fullname: e.target.fullname.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        signup(data);
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo / Brand */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-display font-bold text-ink tracking-tight">
                        Social<span className="text-coral">Book</span>
                    </h1>
                    <p className="mt-2 text-ink/50 text-sm">
                        Join the community today
                    </p>
                </div>

                {/* Card */}
                <div className="glass-card p-8">
                    <h2 className="text-2xl font-display font-semibold text-ink mb-6">
                        Create your account
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium text-ink/70 mb-1.5">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="John Doe"
                                required
                                className="input-field"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-ink/70 mb-1.5">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                className="input-field"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-ink/70 mb-1.5">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create a password"
                                required
                                className="input-field"
                            />
                        </div>

                        <button className="btn-primary mt-2">
                            Create Account
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-ink/50">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-teal font-semibold hover:text-teal/80 transition-colors"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
