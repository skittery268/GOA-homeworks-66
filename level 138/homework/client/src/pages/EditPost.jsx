import { usePost } from "../context/PostContext";

const EditPost = () => {
    const { editPost } = usePost();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: e.target.title.value,
            content: e.target.content.value
        };

        e.target.reset();
        editPost(data);
    }

    return (
        <>
            <div className="page-section">
                <form className="form" onSubmit={handleSubmit}>
                    <h3 className="upload-title">Edit Post</h3>
                    <input type="text" name="title" placeholder="Post Title" className="form-input" />
                    <textarea name="content" placeholder="Post content" className="form-input form-textarea"></textarea>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default EditPost;