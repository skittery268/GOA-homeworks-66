import { useState } from "react";

const Input = ({ type }) => {
    const [input, setInput] = useState("");

    const handleChange = ({ target }) => {
        setInput(target.value)
    }

    const inputStyle = {
        border: "none",
        borderBottom: "1px solid black",
        borderTop: "1px solid black",
        borderRadius: "10px",
        padding: "10px"
    }

    return (
        <>
            <input type={type} name="input" onChange={handleChange} value={input} style={inputStyle} placeholder={type} />
            {type === "password" ? <></> : <p>{input}</p>}
        </>
        
    )
}

export default Input;

