import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";
import { useGroups } from "../hooks/useGroups";
import { useState } from "react";

const CreateGroup = () => {
    const [formData, handleChange, handleSubmit, resetForm] = useForm({
        title: "",
        description: ""
    })
    const [creating, setCreating] = useState(false);

    const { createGroup } = useGroups();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        handleSubmit(e, async (data) => {
            if (!data.title.trim() || creating) return;

            setCreating(true);

            const group = await createGroup({
                title: data.title.trim(),
                description: data.description.trim()
            });

            setCreating(false);

            if (!group) return;

            resetForm();
            navigate(`/group/${group._id}`);
        });
    }

    return (
        <form className="card create-group" onSubmit={onSubmit}>
            <h2>Create a group</h2>
            <p className="muted">You become the admin of every group you create.</p>

            <input
                type="text"
                name="title"
                placeholder="Group name"
                maxLength={50}
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Short description (optional)"
                maxLength={200}
                value={formData.description}
                onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary" disabled={!formData.title.trim() || creating}>
                {creating ? "Creating..." : "Create group"}
            </button>
        </form>
    )
}

export default CreateGroup;
