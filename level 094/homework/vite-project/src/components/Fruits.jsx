import { useState } from "react"

const Fruits = () => {
    const [fruits, setFruits] = useState(["Apple", "Banana", "Kiwi"]);

    const addOrange = () => {
        setFruits([...fruits, "Orange"]);
    }

    const cleareList = () => {
        setFruits([])
    }

    return (
        <>
            <h1>Fruits: </h1>
            <ul>
                {
                    fruits.map(fruit => {
                        return <li key={fruit}>{fruit}</li>
                    })
                }
            </ul>
            <button onClick={addOrange}>Add Orange</button>
            <button onClick={cleareList}>Cleare list</button>
        </>
    )
}

export default Fruits;
