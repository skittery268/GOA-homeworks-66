import { Link } from "react-router";
import { useAuth } from "../context/auth.context.jsx";
import { useForm } from "../hooks/useForm";

const Register = () => {
    const [formData, handleChange, handleSubmit] = useForm({
        fullname: "",
        email: "",
        password: ""
    });

    const { register } = useAuth();

    return (
        <main className="min-h-screen flex items-center justify-center bg-white px-6">
            <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-sm p-8">
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                    Register
                </h1>

                <form
                    onSubmit={(e) => handleSubmit(e, register)}
                    className="space-y-6"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none"
                        />
                    </div>

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
                        Sign up
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-8">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-blue-500">Sign In</Link>
                </p>
            </div>
        </main>
    );
};

export default Register;
