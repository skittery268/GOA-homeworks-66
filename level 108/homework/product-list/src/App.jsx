import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Order from "./components/Order";

const App = () => {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <main className="mb-10">
      <div className="flex">
        <Products cart={cart} setCart={setCart} />

        <Cart cart={cart} setCart={setCart} open={open} setOpen={setOpen} />

        <Order cart={cart} setCart={setCart} open={open} setOpen={setOpen} />
      </div>
    </main>
  )
}

export default App;
