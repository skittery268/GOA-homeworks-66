import { useCallback } from "react";
import { useState } from "react"

export const useForm = (initValue) => {
    const [formData, setFormData] = useState(initValue || {});

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({...prev, [name]: value}))
    }, [])

    const handleSubmit = useCallback((e, cb) => {
        e.preventDefault();

        cb(formData);
    }, [formData]);

    return [formData, handleChange, handleSubmit];
};