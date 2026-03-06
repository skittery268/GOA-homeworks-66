import { useAuth } from "../context/AuthContext";

const Register = () => {
    const { register, reg, verifyAcc } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        register(data);
    }

    const handleVeify = (e) => {
        e.preventDefault();

        const code = e.target.code.value;

        verifyAcc(code);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
            {
                reg && (
                    <form onSubmit={handleVeify}>
                        <input type="number" name="code" placeholder="Verifycation code" />
                        <button type="submit">Verificate</button>
                    </form>
                )
            }
        </>
    )
}

export default Register;