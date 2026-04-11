import { useAuth } from "../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h1>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                        <span className="text-gray-500 text-sm w-16">Name</span>
                        <span className="text-gray-900 font-medium">{user?.name}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                        <span className="text-gray-500 text-sm w-16">Email</span>
                        <span className="text-gray-900 font-medium">{user?.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;