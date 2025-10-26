import { useEffect, useState } from "react"
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkount from "./components/Checkout";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  // Promocodes array
  const promocodes = [
    { code: 'DISCOUNT10', discount: 0.1 },
    { code: 'DISCOUNT20', discount: 0.2 },
    { code: 'DISCOUNT50', discount: 0.5 },
    { code: 'FREE', discount: 1 }
  ];

  // Fetching product data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        console.log(data);
        setProducts(data);
      } catch(err) {
        console.log(err.message);
      }
    }

    fetchData();
  }, []);

  // Calulating total price when cart changes
  useEffect(() => {
    const sum = cart.reduce((prev, cur) => prev + cur.unit * cur.price, 0);
    setPrice(sum.toFixed(2));
  }, [cart]);

  const handleIncreaseUnit = (id) => {
    const updatedCart = cart.map(item => item.id === id ? { ...item, unit: item.unit + 1 } : item);

    setCart(updatedCart)
  };
  
  return (
    <main>  
      <h1>My market</h1>

      <Products cart={cart} setCart={setCart} handleIncreaseUnit={handleIncreaseUnit} products={products} />

      <Cart cart={cart} setCart={setCart} handleIncreaseUnit={handleIncreaseUnit} price={price} />

      <Checkount cart={cart} setPrice={setPrice} promocodes={promocodes} price={price} />
      
    </main>
  )
}

export default App
