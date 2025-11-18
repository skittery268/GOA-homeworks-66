import { useAuth } from "../context/auth.context";

const Profile = () => {
    const { user } = useAuth();

    const splitedFullname = user.fullname.toUpperCase().split(" ");

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                {/* Left / Avatar panel */}
                <div className="md:w-1/3 bg-linear-to-br from-indigo-600 to-purple-600 p-8 flex flex-col items-center justify-center text-white">
                    <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center text-3xl font-semibold">
                        {splitedFullname[0][0] + splitedFullname[1][0]}
                    </div>
                    <h2 className="mt-4 text-xl font-semibold">{user.fullname}</h2>
                    <p className="text-sm opacity-90">Premium Member</p>
                </div>

                {/* Right / Info panel */}
                <div className="md:w-2/3 p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-700">Profile</h3>
                        <button
                            type="button"
                            className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md text-sm"
                        >
                            Edit
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-md">
                            <div>
                                <p className="text-sm text-gray-500">Full name</p>
                                <p className="mt-1 text-gray-800 font-medium">{user.fullname}</p>
                            </div>
                            <div className="mt-3 sm:mt-0 text-sm text-gray-500">Verified</div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-md">
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="mt-1 text-gray-800 font-medium">{user.email}</p>
                            </div>
                            <div className="mt-3 sm:mt-0 text-sm text-gray-500">Primary</div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-md">
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="mt-1 text-gray-800 font-medium">+1 (555) 123-4567</p>
                            </div>
                            <div className="mt-3 sm:mt-0 text-sm text-gray-500">Mobile</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;