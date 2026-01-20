import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { usePost } from "../context/PostContext";
import { Link } from "react-router";

const Posts = ({ canDelete = 0 }) => {
    const [ind, setInd] = useState(true);
    const { posts, deletePost, setEditedPost } = usePost();
    const { user } = useAuth();

    useEffect(() => {
        setInd(!ind);
    }, [posts]);

    return (
        <div className="posts-container">
            {
                posts.map((post, index) => {
                    return (
                        <div key={index} className="post-card">
                            <h4 className="post-title">{post.title}</h4>
                            <p className="post-content">{post.content}</p>
                            {
                                user.id === post.userId && (
                                    <div className="post-actions">
                                        <button className="btn btn-danger" onClick={() => deletePost(post.id, canDelete)}>Delete</button>
                                        <Link to={"/editpost"} className="btn btn-secondary" onClick={() => setEditedPost(post)}>Edit</Link>
                                    </div>
                                )
                                
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Posts;