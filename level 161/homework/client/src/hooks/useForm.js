import { useState } from "react"

export const useForm = (initialValue) => {
    const [formData, setFormData] = useState(initialValue || {});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e, cb) => {
        e.preventDefault();

        cb(formData);
    }

    const resetForm = () => {
        setFormData(initialValue);
    }

    return [formData, handleChange, handleSubmit, resetForm];
}