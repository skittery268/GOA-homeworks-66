import { useState } from "react"

const useForm = () => {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({ ...prev, [name]: value }));
    }

    return [data, handleChange];
};

export default useForm;

