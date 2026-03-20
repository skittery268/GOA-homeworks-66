import { createContext } from "react";
import { toast } from "react-toastify";
import { usePosts } from "../hooks/usePosts";

export const CommentsContext = createContext();

const API_URL = 'http://localhost:3000/api'

export const CommentsProvider = ({ children }) => {
    const { setPosts, setUserPosts } = usePosts();

    const addComment = async (postId, title, content) => {
        try {
            const res = await fetch(`${API_URL}/comments/${postId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ title, content })
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            setPosts(prev => prev.map(post => post._id === postId ? { ...post, comments: [...post.comments, data.data.comment] } : post));
            setUserPosts(prev => prev.map(post => post._id === postId ? { ...post, comments: [...post.comments, data.data.comment] } : post));

            toast.success(data.message);
        } catch (err) {
            toast.error(err.message);
        }
    }

    const deleteComment = async (postId, commentId) => {
        try {
            const res = await fetch(`${API_URL}/comments/${postId}/${commentId}`, {
                method: 'DELETE',
                credentials: 'include'
            })

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            setPosts(prev => prev.map(post => post._id === postId ? { ...post, comments: post.comments.filter(c => c.id !== commentId) } : post));
            setUserPosts(prev => prev.map(post => post._id === postId ? { ...post, comments: post.comments.filter(c => c.id !== commentId) } : post));

            toast.success(data.message);
        } catch (err) {
            toast.error(err.message);
        }
    }

    const updateComment = async (postId, commentId, title, content) => {
        try {
            const res = await fetch(`${API_URL}/comments/${postId}/${commentId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ title, content })
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            setPosts(prev => prev.map(post => post._id === postId ? { ...post, comments: post.comments.map(c => c.id === commentId ? data.data.comment : c) } : post));
            setUserPosts(prev => prev.map(post => post._id === postId ? { ...post, comments: post.comments.map(c => c.id === commentId ? data.data.comment : c) } : post));

            toast.success(data.message);
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <CommentsContext.Provider value={{ addComment, deleteComment, updateComment }}>
            {children}
        </CommentsContext.Provider>
    )
}