import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <main className="mb-10">
      <div className="flex">
        <Products cart={cart} setCart={setCart} />

        <Cart cart={cart} setCart={setCart} />
      </div>
    </main>
  )
}

export default App;
