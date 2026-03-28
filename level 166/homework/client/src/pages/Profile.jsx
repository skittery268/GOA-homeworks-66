import { useAuth } from "../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();

    return (
        <section className="mx-auto w-full max-w-2xl">
            <div className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-xl shadow-slate-200/80 backdrop-blur sm:p-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">Profile</h1>
                <p className="mt-1 text-sm text-slate-500">Your account details.</p>

                <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Full Name</p>
                        <p className="mt-1 text-base font-semibold text-slate-900">{user.fullname}</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
                        <p className="mt-1 text-base font-semibold text-slate-900">{user.email}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;