import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

const Login = () => {
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        email: "",
        password: ""
    });

    const { login } = useAuth();

    return (
        <form onSubmit={(e) => { handleSubmit(e, login); resetForm(); }}>
            <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;