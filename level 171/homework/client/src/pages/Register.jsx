import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

const Register = () => {
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        name: "",
        email: "",
        password: ""
    })

    const { register } = useAuth();

    return (
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create Account</h1>
                <form onSubmit={(e) => { handleSubmit(e, register); resetForm() }} className="flex flex-col gap-4">
                    <input
                        type="text" name="name" placeholder="Name"
                        value={formData.name} onChange={handleChange}
                        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="email" name="email" placeholder="Email"
                        value={formData.email} onChange={handleChange}
                        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="password" name="password" placeholder="Password"
                        value={formData.password} onChange={handleChange}
                        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="submit"
                        className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-2.5"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;