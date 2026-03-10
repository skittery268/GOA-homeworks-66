import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePosts = () => useContext(PostsContext);

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        const allPosts = JSON.parse(localStorage.getItem("posts")) || [];

        setPosts(allPosts);
    }

    useEffect(() => {
        getPosts();
    }, [])

    const createPost = (formData) => {
        const allPosts = JSON.parse(localStorage.getItem("posts")) || [];
        const newPost = { ...formData };

        allPosts.push(newPost);
        setPosts(allPosts);
        localStorage.setItem("posts", JSON.stringify(posts));
    }

    return (
        <PostsContext.Provider value={{ posts, createPost }}>
            {children}
        </PostsContext.Provider>
    )
}