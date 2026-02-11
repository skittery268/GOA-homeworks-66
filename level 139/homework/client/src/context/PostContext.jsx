import { createContext, useState, useContext } from "react";
import { useAuth } from "./AuthContext";

const PostContext = createContext();

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

    // Get all users posts
    const getPosts = async (userId = 0) => {
        try {
            const res = await fetch(`${API_URL}/post?userId=${userId}`);

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

    // Delete post
    const deletePost = async (post, userId = 0) => {
        try {
            const res = await fetch(`${API_URL}/post/${post.id}/${user.id}`, {
                method: 'DELETE'
            });
            const data = await res.json();

            if(!res.ok) {
                alert(data.message);
                return;
            };

            if (userId) {
                getPosts(userId);
            } else {
                getPosts()
            }
            alert("Post deleted Successfully!");
        } catch(err) {
            console.log(err);
        }
    };

    // Edit post
    const editPost = async (postId, data) => {
        try {
            const res = await fetch(`${API_URL}/post/${postId}/${user.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if(!res.ok) {
                alert(result.message);
                return;
            }

            setPosts(result);
            alert("Post changed succesfully!");
        } catch(err) {
            console.log(err);
        }
    };


    return (
        <PostContext.Provider value={{createPost, posts, getPosts, deletePost, editPost}}>
            { children }
        </PostContext.Provider>
    )
}