import { useAuth } from "../context/auth.context";
import { useForm } from "../hooks/useForm";

const Login = () => {
    const [formData, handleChange, handleSubmit] = useForm({
        email: "",
        password: ""
    });
    const { login } = useAuth();

    return (
        <main>
            <h1>Login</h1>

            <form onSubmit={(e) => handleSubmit(e, login)}>
                <input type="email" onChange={handleChange} value={formData.email}  name="email" placeholder="Email" required />
                <input type="password" onChange={handleChange} value={formData.password}  name="password" placeholder="Password" required />

                <button>Submit</button>
            </form>
        </main>
    )
}

export default Login;