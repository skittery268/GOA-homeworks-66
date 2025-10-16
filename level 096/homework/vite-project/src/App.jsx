import { useEffect, useState } from "react"
import Counter from "./components/Counter";

function App() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <>
      <button onClick={() => setColor("white")}>White</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("pink")}>Pink</button>
      <button onClick={() => setColor("black")}>Black</button>

      <Counter />
    </>
  )
}

export default App
