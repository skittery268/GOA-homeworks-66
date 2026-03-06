import { usePost } from "../context/postsContext";

const CreatePost = () => {
    const { addPost } = usePost();

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const content = e.target.content.value;

        addPost({ title, content });
    }

    return (
        <>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="enter title" required /> <br />
                <textarea name="content" placeholder="enter content" required>

                </textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CreatePost;