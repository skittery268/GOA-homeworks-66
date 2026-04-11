import { useForm } from "../hooks/useForm";
import { useGroups } from "../hooks/useGroups";

const CreateGroup = () => { 
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        title: ""
    })

    const { createGroup } = useGroups();

    return (
        <form onSubmit={(e) => { handleSubmit(e, createGroup); resetForm() }}>
            <h1>Create Group</h1>
            <input type="text" name="title" placeholder="Enter Group Title" value={formData.title} onChange={handleChange}  />
            <br />
            <button type="submit">Create Group</button>
        </form>
    )
}

export default CreateGroup;