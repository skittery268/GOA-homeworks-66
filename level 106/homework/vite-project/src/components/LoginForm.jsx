import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const { login } = useContext(AuthContext);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setUser(prev => ({ ...prev, [name]: value }));
    }

    const handleClick = () => {
        if (user.userName === "" || user.email === "" || user.password === "") {
            alert("Please fill in all fields");
        } else {
            login(user);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-indigo-50 p-6">
            <form className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6 border border-gray-200">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Welcome back</h2>
                    <p className="text-sm text-gray-500">Sign in to your account</p>
                </div>

                <div className="space-y-4">
                    <label className="block">
                        <span className="text-sm text-gray-600">Username</span>
                        <input
                            name="userName"
                            type="text"
                            value={user.userName || ""}
                            onChange={handleChange}
                            placeholder="Your username"
                            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                        />
                    </label>

                    <label className="block">
                        <span className="text-sm text-gray-600">Email</span>
                        <input
                            name="email"
                            type="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                        />
                    </label>

                    <label className="block">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Password</span>
                            <a className="text-xs text-indigo-600 hover:underline" href="#">Forgot?</a>
                        </div>
                        <input
                            name="password"
                            type="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                        />
                    </label>
                </div>

                <button
                    type="button"
                    onClick={handleClick}
                    className="w-full mt-2 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                    Sign in
                </button>

                <p className="text-center text-xs text-gray-500">
                    Don't have an account? <a className="text-indigo-600 hover:underline" href="#">Sign up</a>
                </p>
            </form>
        </div>
    )
}

export default LoginForm;