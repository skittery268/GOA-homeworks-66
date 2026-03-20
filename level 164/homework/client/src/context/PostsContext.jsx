import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';

export const PostsContext = createContext();

const API_URL = 'http://localhost:3000/api';

const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);
    const currentUserId = useRef(null);

    const createPost = async (data) => {
        try {
            const formData = new FormData();

            formData.append('title', data.title);
            formData.append('content', data.content);
            formData.append('postImage', data.postImage);

            const res = await fetch(`${API_URL}/posts`, {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            const newPost = result.data.post;
            setPosts(prev => [...prev, newPost]);
            setUserPosts(prev => [...prev, newPost]);
            toast.success(result.message);
        } catch (err) {
            toast.error(err.message);
        }
    };

    const getPosts = async () => {
        try {
            const res = await fetch(`${API_URL}/posts`);
            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            setPosts(result.data.posts);
        } catch (err) {
            toast.error(err.message);
        }
    };

    const loadUserPosts = useCallback(async (userId) => {
        if (!userId) {
            setUserPosts([]);
            return;
        }

        currentUserId.current = userId;
        setIsLoadingUserPosts(true);

        try {
            const res = await fetch(`${API_URL}/posts/user/${userId}`);
            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            if (currentUserId.current === userId) {
                setUserPosts(result.data.posts);
            }
        } catch (err) {
            toast.error(err.message);
            setUserPosts([]);
        } finally {
            if (currentUserId.current === userId) {
                setIsLoadingUserPosts(false);
            }
        }
    }, []);

    const deletePost = async (postId) => {
        try {
            const res = await fetch(`${API_URL}/posts/${postId}`, {
                method: 'DELETE',
                credentials: 'include'
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            setPosts(prev => prev.filter(p => p._id !== postId));
            setUserPosts(prev => prev.filter(p => p._id !== postId));
            toast.success(result.message);
        } catch (err) {
            toast.error(err.message);
        }
    };

    const updatePost = async (postId, data) => {
        try {
            const res = await fetch(`${API_URL}/posts/${postId}`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include'
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            const updatedPost = result.data.post;
            setPosts(prev => prev.map(p => p._id === postId ? updatedPost : p));
            setUserPosts(prev => prev.map(p => p._id === postId ? updatedPost : p));
            toast.success(result.message);
        } catch (err) {
            toast.error(err.message);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <PostsContext.Provider value={{
            posts,
            userPosts,
            isLoadingUserPosts,
            createPost,
            getPosts,
            loadUserPosts,
            deletePost,
            updatePost,
            setPosts,
            setUserPosts
        }}>
            {children}
        </PostsContext.Provider>
    );
};

export default PostsProvider;
