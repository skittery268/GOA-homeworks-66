import { useAuth } from "../context/auth.context";

const Register = () => {
    const { register } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { 
            userName: e.target.userName.value,
            userEmail: e.target.userEmail.value,
            userPassword: e.target.userPassword.value
        }

        register(data);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" placeholder="Enter your name" />
                <br />
                <input type="email" name="userEmail" placeholder="Enter your email" />
                <br />
                <input type="password" name="userPassword" placeholder="Enter your password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Register;