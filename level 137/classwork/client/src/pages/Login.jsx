import { useAuth } from "../context/auth.context";

const Login = () => {
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { 
            userEmail: e.target.userEmail.value,
            userPassword: e.target.userPassword.value
        }

        login(data);
    }
    
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type="email" name="userEmail" placeholder="enter email" />
                <br />
                <input type="password" name="userPassword" placeholder="enter password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Login;