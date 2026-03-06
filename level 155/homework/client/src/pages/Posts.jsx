import { useState } from "react";
import { usePost } from "../context/postsContext";

const Posts = () => {
    const { posts, deletePost, editPost } = usePost();
    const [editingId, setEditingId] = useState(null);

    const handleSubmit = (e, id) => {
        e.preventDefault();

        const title = e.target.title.value;
        const content = e.target.content.value;

        editPost({ title, content }, id);
        setEditingId(null);
    }
    
    return (
        <>
            {
                posts.map((post, index) => {
                    return (
                        editingId === post._id ? (
                            <form key={index} onSubmit={(e) => handleSubmit(e, post._id)}>
                                <input type="text" name="title" placeholder="enter title" defaultValue={post.title} /> <br />
                                <textarea name="content" placeholder="enter content" defaultValue={post.content}>

                                </textarea>
                                <br />
                                <button type="submit">Edit</button>
                                <button type="button" onClick={() => setEditingId(null)}>Cancel</button>
                            </form>
                        ) : (
                            <div key={index}>
                                <h1>Post Title: {post.title}</h1>
                                <h1>Post content: {post.content}</h1>
                                <button onClick={() => deletePost(post._id)}>Delete</button>
                                <button onClick={() => setEditingId(post._id)}>Edit Post</button>
                            </div>
                        )
                    )
                })
            }
        </>
    )
}

export default Posts;