// import { createContext } from "react";
import Child from "./components/Child";

import Child2 from "./components/CHild2"
import { useColorContext } from "./context/ColorProvider"

// export const myContext = createContext();

function App() {
  const { handleClick } = useColorContext();

  return (
    <>
     <myContext.Provider value={"Hello"} >
      <Child />
     </myContext.Provider>

     <myContext.Provider value={"Bye"} >
      <Child />
     </myContext.Provider>

     <Child2 />
     <button onClick={handleClick}>Change Color</button>
    </>
  )
}

export default App
