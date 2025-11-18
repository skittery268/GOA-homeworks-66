import { memo } from "react";

const Child = memo(({ toDoList }) => {
    return (
        <>
            <ul>
                {
                    toDoList.map((item, index) => <li id={index}>{item}</li>)
                }
            </ul>
        </>
    )
});

export default Child;

