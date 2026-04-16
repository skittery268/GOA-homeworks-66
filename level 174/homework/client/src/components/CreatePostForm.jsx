import { usePosts } from "../hooks/usePosts";

const CreatePostForm = ({ user, isEditing, setIsEditing, editPost, setEditPost }) => {
    const { createPost, updatePost } = usePosts();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: e.target.title.value,
            content: e.target.content.value,
            postImage: e.target.postImage.files[0]
        };

        if(isEditing) {
            updatePost(editPost._id, data);
            setIsEditing(false);
            setEditPost(null);
            return; 
        }

        createPost(data);
        e.target.reset();
    }

    return (
        <div className="md:col-span-2 glass-card p-6">
            <h3 className="text-lg font-semibold text-ink mb-4">{isEditing ? "Update Post" : "Create a Post"}</h3>
            <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal/60 flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">
                        {user.fullname?.charAt(0).toUpperCase()}
                    </span>
                </div>
                <form onSubmit={handleSubmit} className="flex-1 space-y-3">
                    <input
                        type="text"
                        name="title"
                        placeholder={isEditing ? editPost.title : "Post title"}
                        required
                        className="input-field"
                    />
                    <textarea
                        name="content"
                        placeholder={isEditing ? editPost.content : "Post Content"}
                        rows={3}
                        className="input-field resize-none"
                    />
                    <input type="file" name="postImage" />
                    <div className="flex justify-end gap-2">
                        {isEditing && (
                            <button
                                type="button"
                                onClick={() => { setIsEditing(false); setEditPost(null); }}
                                className="px-4 py-2 text-sm font-medium rounded-lg border border-ink/10 text-ink/60 hover:bg-ink/5 transition-colors cursor-pointer"
                            >
                                Cancel
                            </button>
                        )}
                        <button className="btn-primary !w-auto text-sm">
                            {isEditing ? "Update" : "Post"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePostForm;
