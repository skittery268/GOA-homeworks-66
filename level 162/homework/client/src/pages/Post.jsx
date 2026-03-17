import { useParams } from "react-router";
import { usePosts } from "../context/PostsContext";
import { useEffect } from "react";

const Post = () => {
    const { getPost, post } = usePosts();
    const { postId } = useParams();

    useEffect(() => {
        getPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId]);
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
            <p className="text-gray-700 leading-relaxed">{post?.content}</p>
        </div>
    )
}

export default Post;