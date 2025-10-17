import { useEffect, useState } from "react";

function Products() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [promoCodes] = useState(["DISCOUNT50", "BLACKFRIDAY", "SUMMERSALE"]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (prod) => {
    const existing = cart.find(item => item.id === prod.id);
    if (existing) {
      handleIncreaseUnit(prod.id);
    } else {
      const newProduct = { ...prod, unit: 1 };
      setCart([...cart, newProduct]);
    }
  };

  const handleIncreaseUnit = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, unit: item.unit + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecreaseUnit = (id) => {
    const item = cart.find(item => item.id === id);
    if (item.unit === 1) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      const updatedCart = cart.map(item =>
        item.id === id ? { ...item, unit: item.unit - 1 } : item
      );
      setCart(updatedCart);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const totalPrice = cart.reduce((prev, cur) => prev + cur.price * cur.unit, 0);

  const isPromoValid = promoCodes.includes(inputValue.trim().toUpperCase());
  const finalPrice = isPromoValid ? totalPrice / 2 : totalPrice;

  return (
    <main>
      <h1>Products</h1>
      <section>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <p>{product.title}</p>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <img src={product.image} height={200} alt={product.title} />
              <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h1>Cart</h1>
        <ul>
          <h2>Products: {cart.reduce((prev, cur) => prev + cur.unit, 0)}</h2>
          {cart.map(prod => (
            <li key={prod.id}>
              <p>{prod.title}</p>
              <p>Unit price: ${prod.price}</p>
              <p>Total: ${(prod.price * prod.unit).toFixed(2)}</p>
              <img src={prod.image} height={200} alt={prod.title} />
              <div>
                <button onClick={() => handleDecreaseUnit(prod.id)}>-</button>
                {prod.unit}
                <button onClick={() => handleIncreaseUnit(prod.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>

        <h2>Total Price: ${totalPrice}</h2>

        <input
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Enter promo code"
          name="promoCode"
        />
        {isPromoValid && (
          <h2>Promo applied! Final Price: ${finalPrice}</h2>
        )}
      </section>
    </main>
  );
}

export default Products;
