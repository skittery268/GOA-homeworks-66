import { useColorContext } from "../context/ColorProvider";

const Child2 = () => {
    const { color } = useColorContext();

    return (
        <div style={{ backgroundColor: color, height: "200px", width: "200px" }}>

        </div>
    )
}

export default Child2;