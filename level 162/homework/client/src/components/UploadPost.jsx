import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostsContext";
import { useForm } from "../hooks/useForm";

const UploadPost = () => {
    const { user } = useAuth();
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        title: "",
        content: "",
        userId: user._id
    })

    const { createPost } = usePosts();

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
            <form onSubmit={(e) => { handleSubmit(e, createPost); resetForm() }} className="space-y-4">
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
                        placeholder="Enter new content" 
                        value={formData.content} 
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="6"
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default UploadPost;