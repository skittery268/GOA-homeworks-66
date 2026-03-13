import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const PostsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePosts = () => useContext(PostsContext);

const api_url = "http://localhost:3000/api/posts"

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);
    const { user } = useAuth();

    const getPosts = async () => {
        try {
            const res = await fetch(api_url);

            const data = await res.json();

            setPosts(data.data.posts);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (posts.length === 0) getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getPost = async (postId) => {
        try {
            const res = await fetch(`${api_url}/${postId}`);

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            setPost(data.data.post);
        } catch (err) {
            console.log(err);
        }
    }
 
    const createPost = async (formData) => {
        try {
            const res = await fetch(api_url, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData),
                credentials: "include"
            })

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            setPosts(prev => [ ...prev, data.data.post ]);
        } catch (err) {
            console.log(err);
        }
    }

    const deletePost = async (postId) => {
        try {
            const res = await fetch(`${api_url}/${postId}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ userId: user._id }),
                credentials: "include"
            })

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            alert(data.message);
            getPosts();
        } catch (err) {
            console.log(err);
        }
    }

    const updatePost = async (postId, formData) => {
        try {
            const res = await fetch(`${api_url}/${postId}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData),
                credentials: "include"
            })

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            alert(data.message);
            getPosts();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <PostsContext.Provider value={{ posts, post, getPost, createPost, deletePost, updatePost }}>
            {children}
        </PostsContext.Provider>
    )
}