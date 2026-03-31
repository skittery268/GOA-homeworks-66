import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

const Register = () => {
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        name: "",
        email: "",
        password: ""
    });

    const { register } = useAuth();

    return (
        <form onSubmit={(e) => { handleSubmit(e, register); resetForm() }}>
            <input type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;