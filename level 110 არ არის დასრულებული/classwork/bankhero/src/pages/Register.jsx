import { useAuth } from "../context/auth.context.jsx";
import { useForm } from "../hooks/useForm";

const Register = () => {
    const [formData, handleChange, handleSubmit] = useForm({
        fullname: "",
        email: "",
        password: ""
    });

    const { register } = useAuth()

    return (
        <main>
            <h1>Register</h1>

            <form onSubmit={(e) => handleSubmit(e, register)}>
                <input type="text" onChange={handleChange} value={formData.fullname} name="fullname" placeholder="Fulname" required />
                <input type="email" onChange={handleChange} value={formData.email}  name="email" placeholder="Email" required />
                <input type="password" onChange={handleChange} value={formData.password}  name="password" placeholder="Password" required />

                <button>Submit</button>
            </form>
        </main>
    )
}

export default Register;