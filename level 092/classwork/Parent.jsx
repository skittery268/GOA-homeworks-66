import Child from "./Child";

function Parent({ myMessage }) {
    return (
        <Child myMessage={myMessage} />
    )
}

export default Parent;