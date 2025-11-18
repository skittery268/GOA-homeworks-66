import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const RegisterForm = () => {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: ""
    });

    const { signUp } = useContext(AuthContext)

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setUser(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = () => {
        if (user.userName === "" || user.email === "" || user.password === "") {
            alert("Please fill in all fields");
        } else {
            signUp(user);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-5"
            >
                <h2 className="text-center text-2xl font-semibold text-gray-800">Create an account</h2>
                <p className="text-center text-sm text-gray-500">Sign up to access your dashboard</p>

                <div>
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
                        User Name
                    </label>
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        value={user.userName}
                        onChange={handleChange}
                        placeholder="Your username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors"
                >
                    Sign Up
                </button>

                <p className="text-center text-sm text-gray-500">
                    Already have an account? <a href="#" className="text-indigo-600 hover:underline">Sign in</a>
                </p>
            </form>
        </div>
    )
}

export default RegisterForm;
