import { useContext } from "react";
import { myContext } from "../App";

const Child = () => {
    const value = useContext(myContext);

    return <p>{value}</p>
}

export default Child;

