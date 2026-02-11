import { createContext, useState, useContext } from "react";
import { useAuth } from "./AuthContext";

const PostContext = createContext();

// Hook to use context value
// eslint-disable-next-line react-refresh/only-export-components
export const usePost = () => useContext(PostContext);

// Constants
const API_URL = 'http://localhost:3000/api';

// eslint-disable-next-line react/prop-types
export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
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

    const deletePost = async (post) => {
        try {
            const res = await fetch(`${API_URL}/post`, {
                method: "DELETE",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify({ post, user })
            })

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <PostContext.Provider value={{createPost, posts, getUserPosts, getPosts, deletePost}}>
            { children }
        </PostContext.Provider>
    )
}