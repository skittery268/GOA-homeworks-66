import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

const Login = () => {
    const [formData, handleChange, handleSubmit] = useForm({
        email: "",
        password: ""
    });

    const { login, submitting } = useAuth();

    return (
        <div className="page auth-page">
            <form className="card auth-card" onSubmit={(e) => handleSubmit(e, login)}>
                <h1>Welcome back</h1>
                <p className="muted">Log in to jump back into your groups.</p>

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Your password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? "Logging in..." : "Log in"}
                </button>

                <p className="muted small center">
                    No account yet? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    )
}

export default Login;
