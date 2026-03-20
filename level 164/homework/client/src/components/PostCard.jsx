import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useComments } from "../hooks/useComments";
import { usePosts } from "../hooks/usePosts";

const PostCard = ({ post, setIsEditing, setEditPost }) => {
    const { user } = useAuth();
    const { deletePost } = usePosts();
    const { addComment, deleteComment, updateComment } = useComments();
    const [commentTitle, setCommentTitle] = useState("");
    const [commentContent, setCommentContent] = useState("");
    const [editingCommentId, setEditingCommentId] = useState(null);
    
    const handleEdit = () => {
        setIsEditing(true);
        setEditPost(post);
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        if (editingCommentId) {
            updateComment(post._id, editingCommentId, commentTitle, commentContent);
            setEditingCommentId(null);
        } else {
            addComment(post._id, commentTitle, commentContent);
        }

        setCommentTitle("");
        setCommentContent("");
    };

    const startEditingComment = (comment) => {
        setEditingCommentId(comment.id);
        setCommentTitle(comment.title);
        setCommentContent(comment.content);
    };

    const cancelEditingComment = () => {
        setEditingCommentId(null);
        setCommentTitle("");
        setCommentContent("");
    };

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

                    <img src={`http://localhost:3000/${post.postImage}`} width={200} />

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

                    <div className="mt-4 rounded-lg bg-ink/5 p-4">
                        <h5 className="text-sm font-semibold text-ink mb-3">
                            {editingCommentId ? "Edit comment" : "Add comment"}
                        </h5>
                        <form onSubmit={handleCommentSubmit} className="space-y-3">
                            <input
                                type="text"
                                value={commentTitle}
                                onChange={(e) => setCommentTitle(e.target.value)}
                                placeholder="Comment title"
                                required
                                className="input-field"
                            />
                            <textarea
                                value={commentContent}
                                onChange={(e) => setCommentContent(e.target.value)}
                                placeholder="Comment content"
                                rows={3}
                                required
                                className="input-field resize-none"
                            />
                            <div className="flex justify-end gap-2">
                                {editingCommentId && (
                                    <button
                                        type="button"
                                        onClick={cancelEditingComment}
                                        className="px-3 py-1.5 text-xs font-medium rounded-lg border border-ink/10 text-ink/60 hover:bg-ink/5 transition-colors cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-coral text-white hover:bg-coral/90 transition-colors cursor-pointer"
                                >
                                    {editingCommentId ? "Update" : "Add"}
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    {
                        post.comments.length > 0 && (
                            <div className="mt-4">
                                <h5 className="text-sm font-semibold text-ink mb-2">Comments</h5>
                                <div className="space-y-3">
                                    {post.comments.map(comment => (
                                        <div key={comment.id} className="bg-ink/5 p-3 rounded-lg">
                                            <div className="flex items-start justify-between gap-3 mb-1">
                                                <span className="text-xs font-semibold text-ink pt-1">
                                                    {comment.title}
                                                </span>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => startEditingComment(comment)}
                                                        className="px-3 py-1.5 text-xs font-medium rounded-lg border border-ink/10 text-ink/60 hover:bg-white/60 transition-colors cursor-pointer"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => deleteComment(post._id, comment.id)}
                                                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-xs text-ink/70 whitespace-pre-line">{comment.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PostCard;
