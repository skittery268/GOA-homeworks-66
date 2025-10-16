import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleNameChange = ({ target }) => {
        const { value } = target;

        setName(value);
    }

    const handleLastNameChange = ({ target }) => {
        const { value } = target;

        setLastName(value);
    }

    return (
        <form>
            <input type="text" onChange={handleNameChange} name="name" placeholder="Name" />
            <input type="text" onChange={handleLastNameChange} name="lastName" placeholder="Last Name" />
            <p>Name: {name}</p>
            <p>Last Name: {lastName}</p>
        </form>
    )
};

export default Form;