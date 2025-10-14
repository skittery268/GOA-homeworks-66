import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // setCount - ი არის ასინქრონული ფუნქცია და შესაბამისად ისინი არ ელოდებიან ერთმანეთს რომ დაასრულონ მოქმედება რიგ რიგობით და ამიტომ count - ს ემატება მარტო 1.
        // setCount(count + 1);
        // setCount(count + 1);

        // იმის გამო რომ ჩვენ გადავცემთ arrow ფუნქციას setCount ფუნქცია იწყებს მუშაობას სინქრონულად და ამის გამო count - ს ემატება ახლა 2 და არა 1.
        setCount(prevValue => prevValue + 1);
        setCount(prevValue => prevValue + 1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>+1</button>
        </>
    )
}

export default Counter;