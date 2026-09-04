import { createContext, useContext, useState } from "react";
import { Post, PostContextType, PostProviderType } from "../types/post";
import { initPosts } from "../data/posts";

const PostsContext = createContext<PostContextType | null>(null);

export const usePost = () => {
    const context = useContext(PostsContext);

    if (!context) {
        throw new Error("Context not supported!");
    };

    return context;
};

export const PostsProvider = ({ children }: PostProviderType) => {
    const [posts, setPosts] = useState<Post[]>(initPosts);
    const [error, setError] = useState<string | null>(null);

    const createPost = (title: string, body: string, author: string): void => {
        if (!title || !body) {
            setError("Title and body are required!");
            return;
        };

        const post: Post = { id: Date.now(), body, author, title, comments: 0, likes: 0 };

        setPosts(prev => [...prev, post]);
    };

    const editPost = (id: number, title: string, body: string): void => {
        const post = posts.find(p => p.id === id);

        if (!post) {
            setError("Post not found!");
            return;
        };

        setPosts(prev => prev.map(p => p.id === id ? { ...p, title, body } : p));
    };

    const deletePost = (id: number): void => {
        const post = posts.find(p => p.id === id);

        if (!post) {
            setError("Post not found!");
            return;
        };

        setPosts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <PostsContext.Provider value={{ posts, error, setError, createPost, deletePost, editPost }}>
            {children}
        </PostsContext.Provider>
    );
};