import { useState } from "react"

const Form2 = () => {
    const [formState, setFormState] = useState({});

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setFormState(prev => {
            return { ...prev, [name]: value };
        });
    }
    
    return (
        <form>
            <input type="text" onChange={handleChange} name="name" />
            <input type="text" onChange={handleChange} name="lastName" />

            <p>Name: {formState.name}</p>
            <p>Last name: {formState.lastName}</p>
        </form>
    )
}

export default Form2;

