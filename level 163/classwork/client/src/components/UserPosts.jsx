import { useState } from "react";
import { usePosts } from "../context/PostsContext";
import { useAuth } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";
import { Link } from "react-router";

const UserPosts = () => {
    const { userPosts, posts, getUserPosts, deletePost, updatePost } = usePosts();
    const [editPostId, setEditPostId] = useState(null);
    const { user } = useAuth();
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        title: "",
        content: "",
        userId: user._id
    })

    useEffect(() => {
        getUserPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts])
    
    return (
        <div>
            {
                userPosts.length === 0 ? (
                    <p className="text-gray-500">No posts found</p>
                ) : (
                    userPosts.map((p, index) => {
                        return (
                            <section key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
                                {
                                    p._id === editPostId ? (
                                        <form onSubmit={(e) => { handleSubmit(e, (fd) => { updatePost(editPostId, fd); setEditPostId(null); resetForm() }) }} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                                <input 
                                                    type="text" 
                                                    name="title" 
                                                    value={formData.title} 
                                                    placeholder="Enter new title" 
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                                                <textarea 
                                                    name="content" 
                                                    value={formData.content} 
                                                    placeholder="Enter new content" 
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Edit</button>
                                                <button onClick={() => setEditPostId(null)} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors">Cancel</button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div>
                                            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                                            <p className="text-gray-700 mb-4">{p.content}</p>
                                            <div className="flex items-center space-x-4">
                                                <Link to={`/post/${p._id}`} className="text-blue-600 hover:text-blue-800 transition-colors">View Details</Link>
                                                {
                                                    user._id === p.userId && (
                                                        <div className="flex space-x-2">
                                                            <button onClick={() => deletePost(p._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">Delete</button>
                                                            <button onClick={() => setEditPostId(p._id)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors">Edit</button>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                        )
                    })
                )
            }
        </div>
    )
}

export default UserPosts;