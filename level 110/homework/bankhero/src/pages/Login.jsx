import { Link } from "react-router";
import { useAuth } from "../context/auth.context";
import { useForm } from "../hooks/useForm";

const Login = () => {
    const [formData, handleChange, handleSubmit] = useForm({
        email: "",
        password: ""
    });

    const { login } = useAuth();

    return (
        <main className="min-h-screen flex items-center justify-center bg-white px-6">
            <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-sm p-8">
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                    Login
                </h1>

                <form
                    onSubmit={(e) => handleSubmit(e, login)}
                    className="space-y-6"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="cursor-pointer w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-sm"
                    >
                        Sign in
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-8">
                    Don’t have an account?{" "}
                    <Link to={"/register"} className="text-blue-500">
                        Sign up
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Login;
