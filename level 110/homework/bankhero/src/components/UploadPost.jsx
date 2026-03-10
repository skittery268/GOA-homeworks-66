import { useAuth } from "../context/auth.context";
import { usePosts } from "../context/PostsContext";
import { useForm } from "../hooks/useForm";

const UploadPost = () => {
    const { user } = useAuth();
    const [formData, handleChange, handleSubmit] = useForm({
        title: "",
        content: "",
        userId: user.id
    })

    const { createPost } = usePosts();

    return (
        <form
            onSubmit={(e) => handleSubmit(e, createPost)}
            className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
        >
            <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="Enter title"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />

            <textarea
                name="content"
                placeholder="Enter content"
                value={formData.content}
                onChange={handleChange}
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Submit
            </button>
        </form>
    )
}

export default UploadPost;