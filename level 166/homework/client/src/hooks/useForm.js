import { useState } from "react"

export const useForm = (initValue) => {
    const [formData, setFormData] = useState(initValue || {});

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e, cb) => {
        e.preventDefault();

        cb(formData);
    }

    const resetForm = () => { 
        setFormData(initValue || {});
    }

    return [formData, handleChange, handleSubmit, resetForm];
}