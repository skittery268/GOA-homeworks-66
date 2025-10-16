import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1)
    }

    useEffect(() => {
        alert(`You clicked ${count} time(s)`)
    }, [count])

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>+1</button>
        </>
    )
}

export default Counter;

