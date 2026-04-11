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
            <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
            <br />
            <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
            <br />
            <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
            <br />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;