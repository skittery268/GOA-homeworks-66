import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

const Register = () => {
    const [formData, handleChange, handleSubmit] = useForm({
        name: "",
        email: "",
        password: ""
    });

    const { register, submitting } = useAuth();

    return (
        <div className="page auth-page">
            <form className="card auth-card" onSubmit={(e) => handleSubmit(e, register)}>
                <h1>Create your account</h1>
                <p className="muted">It takes a few seconds.</p>

                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={30}
                    required
                    value={formData.name}
                    onChange={handleChange}
                />

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
                    placeholder="At least 6 characters"
                    autoComplete="new-password"
                    minLength={6}
                    required
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? "Creating..." : "Register"}
                </button>

                <p className="muted small center">
                    Already registered? <Link to="/login">Log in</Link>
                </p>
            </form>
        </div>
    )
}

export default Register;
