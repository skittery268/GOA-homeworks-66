import UploadPost from "../components/UploadPost";
import { useAuth } from "../context/AuthContext"

const Profile = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <div className="space-y-2">
                    <p className="text-lg"><span className="font-semibold">Name:</span> {user.fullname}</p>
                    <p className="text-lg"><span className="font-semibold">Email:</span> {user.email}</p>
                </div>
            </div>
            <UploadPost />
        </div>
    )
}

export default Profile