import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [count, setCount] = useState(0);
    const [inputs, setInputs] = useState({});

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs((prev) => ({ ...prev, [name]: value }));
    }

    console.log(inputs)

    return (
        <>
            <input type="text" onChange={handleChange} name="txt" />
            <p>Count: {count}</p>
            <button onClick={handleClick}>+1</button>

            <Child handleClick={handleClick} />
        </>
    )
}

export default Parent;

