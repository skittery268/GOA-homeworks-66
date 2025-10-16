import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 7) {
            alert('Lucky number');
        }
    }, [count])

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}

export default Counter;

