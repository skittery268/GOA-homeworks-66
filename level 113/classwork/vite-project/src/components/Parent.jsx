import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [text, setText] = useState("");
    const [toDoList, setToDoList] = useState([]);

    const addToDo = useCallback(() => {
        setToDoList([ ...toDoList, text ])
    }, [toDoList, text])

    return (
        <>
            <input type="text" onChange={(e) => setText(e.target.value)} id="" />
            <button onClick={addToDo}>Submit</button>
            <br />

            <Child toDoList={toDoList} />
        </>
    )
}

export default Parent;