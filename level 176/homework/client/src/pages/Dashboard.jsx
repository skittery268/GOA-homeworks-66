import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { usePosts } from "../hooks/usePosts";
import WelcomeCard from "../components/WelcomeCard";
import CreatePostForm from "../components/CreatePostForm";
import ProfileSidebar from "../components/ProfileSidebar";
import PostCard from "../components/PostCard";
import EmptyPosts from "../components/EmptyPosts";
import Loader from "../components/Loader";

const Dashboard = () => {
    const { user } = useAuth();
    const { userPosts, isLoadingUserPosts, loadUserPosts } = usePosts();
    const [isEditing, setIsEditing] = useState(false);
    const [editPost, setEditPost] = useState(null);

    useEffect(() => {
        loadUserPosts(user?._id);
    }, [user?._id, loadUserPosts]);

    if (!user || isLoadingUserPosts) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen">
            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                <WelcomeCard user={user} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <CreatePostForm isEditing={isEditing} setIsEditing={setIsEditing} editPost={editPost} setEditPost={setEditPost} user={user} />
                    <ProfileSidebar user={user} />
                </div>

                {userPosts.length > 0 ? (
                    <div className="mt-6 space-y-4">
                        {userPosts.map(post => (
                            <PostCard isEditing={isEditing} feed={false} setIsEditing={setIsEditing} setEditPost={setEditPost} key={post._id} post={post} />
                        ))}
                    </div>
                ) : (
                    <EmptyPosts />
                )}
            </main>
        </div>
    );
};

export default Dashboard;
