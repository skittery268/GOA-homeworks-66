import { useAuth } from "../context/AuthContext";
import { usePost } from "../context/PostContext";

const Posts = () => {
    const { posts, deletePost } = usePost();
    const { user } = useAuth();

    return (
        <div className="posts-container">
            {
                posts.map(post => {
                    return (
                        <div key={post.id} className="post-card">
                            <h4 className="post-title">{post.title}</h4>
                            <p className="post-content">{post.content}</p>
                            { user.id === post.userId && <button onClick={() => deletePost(post)}>Delete</button> }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Posts;