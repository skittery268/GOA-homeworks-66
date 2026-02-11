import { useEffect } from "react";
import Posts from "../components/Posts";
import UploadPost from "../components/UploadPost";
import { useAuth } from "../context/AuthContext";
import { usePost } from "../context/PostContext";

const Profile = () => {
    const { user } = useAuth();
    const { getPosts } = usePost();

    useEffect(() => {
        getPosts(user.id);
    }, [user]);

    return (
        <section className="page-section">
            <h2 className="page-title">Profile</h2>

            <div className="profile-info">
                <p className="profile-detail"><strong>Username:</strong> {user?.username}</p>
                <p className="profile-detail"><strong>Email:</strong> {user?.email}</p>
            </div>

            <div className="upload-section">
                <UploadPost />
            </div>

            <div className="posts-section">
                <h3 className="section-title">My Posts</h3>
                <Posts userId={user.id} />
            </div>
        </section>
    )
};

export default Profile;
