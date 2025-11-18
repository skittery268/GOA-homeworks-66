import { useMemo, useState } from "react";

const Inputs = () => {
    const [number, setNumber] = useState(0);
    const [inputs, setInputs] = useState({});

    const numberFactorial = (num) => {
        let result = 1;

        for (let i = num; i > 1; i--) {
            result *= i;
        }
        
        return result || 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "number") {
            setNumber(() => parseInt(value))
        }

        setInputs((prev) => ({ ...prev, [name]: value }));
    }

    console.log(inputs)

    const result = useMemo(() => numberFactorial(number), [number]);

    return (
        <>
            <input type="number" onChange={(e) => handleChange(e)} name="number" />
            <input type="text" onChange={(e) => handleChange(e)} name="txt" />

            <p>number factorial: {result}</p>

        </>
    )
}

export default Inputs;