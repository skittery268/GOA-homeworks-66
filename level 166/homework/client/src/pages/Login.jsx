import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

const Login = () => {
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        email: "",
        password: ""
    });

    const { login } = useAuth();

    return (
        <section className="mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-xl shadow-sky-100/80 backdrop-blur sm:p-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">Welcome Back</h1>
                <p className="mt-1 text-sm text-slate-500">Login to continue chatting with your contacts.</p>

                <form onSubmit={(e) => { handleSubmit(e, login); resetForm(); }} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-slate-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-1 block text-sm font-semibold text-slate-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-slate-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Login;