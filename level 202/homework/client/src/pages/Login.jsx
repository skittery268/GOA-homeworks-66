import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { redirectGoogleLogin } from "../services/AuthService";

const Login = () => {
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        email: "",
        password: ""
    });

    const { login } = useAuth();

    return (
        <form onSubmit={(e) => { handleSubmit(e, login); resetForm() }}>
            <h1>Login</h1>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <br />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <br />
            <button type="submit">Login</button>
            <button type="button" onClick={redirectGoogleLogin}>Continue with google</button>
        </form>
    );
};

export default Login;