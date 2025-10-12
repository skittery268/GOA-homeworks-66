import Grandchild from "./Grandchild";

function Child({ myMessage }) {
    return (
        <Grandchild myMessage={myMessage} />
    )
}

export default Child;
