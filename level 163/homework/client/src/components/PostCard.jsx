import { useAuth } from "../hooks/useAuth";
import { usePosts } from "../hooks/usePosts";

const PostCard = ({ post, setIsEditing, setEditPost }) => {
    const { user } = useAuth();
    const { deletePost } = usePosts();
    
    const handleEdit = () => {
        setIsEditing(true);
        setEditPost(post);
    }

    return (
        <div className="glass-card p-6">
            <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral to-gold flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">
                        {post.user?.fullname?.charAt(0).toUpperCase() ?? "?"}
                    </span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-ink">
                            {post.user?.fullname ?? "Unknown"}
                        </span>
                        <span className="text-xs text-ink/30">
                            {new Date(post.createdAt).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                            })}
                        </span>
                    </div>
                    <h4 className="text-base font-semibold text-ink mt-1">{post.title}</h4>
                    <p className="text-sm text-ink/70 mt-1 whitespace-pre-line">{post.content}</p>

                    {post.postImage && <img src={`/images/posts/${post.postImage}`} width={200} />}

                    {
                        user._id == post.user._id && (
                            <div className="flex items-center gap-2 mt-3">
                                <button
                                    onClick={handleEdit}
                                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-ink/10 text-ink/60 hover:bg-ink/5 transition-colors cursor-pointer"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deletePost(post._id)}
                                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default PostCard;
