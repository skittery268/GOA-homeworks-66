import Child from "./Child";

function Parent({ handleClick }) {
    return (
        <Child handleClick={handleClick} />
    )
}

export default Parent;
