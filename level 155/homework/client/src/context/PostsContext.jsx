import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePost = () => useContext(PostsContext);

const api_url = "http://localhost:3000/api/posts"

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const res = await fetch(api_url);

            const data = await res.json();

            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (posts.length === 0) getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addPost = async (formData) => {
        try {
            const res = await fetch(api_url, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            setPosts((prev) => [ ...prev, data ]);
        } catch (err) {
            console.log(err);
        }
    }

    const deletePost = async (postId) => {
        try {
            const res = await fetch(`${api_url}/${postId}`, {
                method: "DELETE"
            });

            if (!res.ok) {
                alert("Error");
                return;
            }

            getPosts();
        } catch (err) {
            console.log(err);
        }
    }

    const editPost = async (formData, postId) => {
        try {
            const res = await fetch(`${api_url}/${postId}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) {
                alert("Error");
                return;
            }

            getPosts();
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <PostsContext.Provider value={{ posts, addPost, deletePost, editPost }}>
            {children}
        </PostsContext.Provider>
    )
}