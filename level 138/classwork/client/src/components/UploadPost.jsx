import { usePost } from "../context/Post.context";

const UploadPost = () => {
    const { createPost } = usePost();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { 
            title: e.target.title.value,
            content: e.target.content.value
        }

        createPost(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Enter post title" />
            <br />
            <textarea name="content" placeholder="Enter post content">

            </textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default UploadPost;