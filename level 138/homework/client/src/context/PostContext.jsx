import { createContext, useState, useContext } from "react";
import { useAuth } from "./AuthContext";

const PostContext = createContext();

// Hook to use context value
export const usePost = () => useContext(PostContext);

// Constants
const API_URL = 'http://localhost:3000/api';

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [editedPost, setEditedPost] = useState(null);
    const { user } = useAuth();
    
    const createPost = async postData => {
        try {
            const res = await fetch(API_URL + '/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...postData, userId: user.id})
            });

            const data = await res.json();

            if(!res.ok) {
                alert(data.message);
                return;
            }

            setPosts([...posts, data]);
        } catch(err) {
            console.log(err);
        }
    };

    // Get specific user posts
    const getUserPosts = async () => {
        try {
            const res = await fetch(`${API_URL}/post/user/${user.id}`);

            const data = await res.json();

            if(!res.ok) {
                alert(data.message);
                return;
            }

            setPosts(data);
        } catch(err) {
            console.log(err);
        }
    };

    // Get all users posts
    const getPosts = async () => {
        try {
            const res = await fetch(`${API_URL}/post`);

            const data = await res.json();

            if(!res.ok) {
                alert(data.message);
                return;
            }

            setPosts(data);
        } catch(err) {
            console.log(err);
        }
    };

    // Delete user post
    const deletePost = async (postId, canDelete) => {
        try {
            const res = await fetch(`${API_URL}/post/${postId}`, {
                method: "DELETE"
            })

            if (!res.ok) {
                const data = await res.json();

                alert(data.message);
                return;
            }

            if (canDelete) {
                getUserPosts();
            } else {
                getPosts();
            }
        } catch (err) {
            console.log(err);
        }
    }

    const editPost = async (postData) => {
        try {
            const res = await fetch(API_URL + "/post", {
                method: "PATCH",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify({ ...postData, id: editedPost.id })
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            setEditedPost(null);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <PostContext.Provider value={{createPost, posts, deletePost, editPost, getUserPosts, getPosts, setEditedPost}}>
            { children }
        </PostContext.Provider>
    )
}