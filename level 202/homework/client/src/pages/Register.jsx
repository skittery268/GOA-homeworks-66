import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { redirectGoogleLogin } from "../services/AuthService";

const Register = () => {
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        fullname: "",
        email: "",
        password: ""
    });

    const { register } = useAuth();

    return (
        <form onSubmit={(e) => { handleSubmit(e, register); resetForm() }}>
            <h1>Register</h1>
            <input type="text" name="fullname" placeholder="fullname" value={formData.fullname} onChange={handleChange} />
            <br />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <br />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <br />
            <button type="submit">Register</button>
            <button type="button" onClick={redirectGoogleLogin}>Continue with google</button>
        </form>
    );
};

export default Register;