import { useState } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreseCount = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return [count, increaseCount, decreseCount, reset];
}

export default useCounter;

