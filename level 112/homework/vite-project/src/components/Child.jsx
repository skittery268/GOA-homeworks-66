import { memo } from "react";

const Child = memo(({ handleClick }) => {
    return (
        <>
            <p>I Am Child</p>
            <button onClick={handleClick}>+100</button>
        </>
    )
})

export default Child;