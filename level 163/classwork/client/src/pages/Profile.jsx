import UploadPost from "../components/UploadPost";
import UserPosts from "../components/UserPosts";
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
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 mt-6">
                <h1 className="text-2xl font-bold mb-4">My posts</h1>
                <UserPosts />
            </div>
        </div>
    )
}

export default Profile