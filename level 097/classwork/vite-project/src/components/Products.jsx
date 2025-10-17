import { useEffect, useState } from "react"

function Products() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setProduct(data);
      } catch (err) {
        console.log(err.message);
      };
    }

    fetchData();
  }, [])

  const handleAddToCart = (prod) => {
    if (cart.find(item => item.id === prod.id)) {
      handleIncreaseUnit(prod.id);
    } else {
      const newProduct = {...prod, unit: 1};
      setCart([...cart, newProduct]);
    }
  };
  
  const handleIncreaseUnit = (id) => {
    const updatedCart = cart.map(item => item.id === id ? { ...item, unit: item.unit + 1 } : item);
    const updateCart = updatedCart.map(item => item.id === id ? { ...item, price: item.price + item.price } : item);

    setCart(updateCart);
  }

  const handleDecreaseUnit = (id) => {
    const item = cart.find(item => item.id === id);

    if (item.unit === 1) {
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart);
      return;
    }

    const updatedCart = cart.map(item => item.id === id ? { ...item, unit: item.unit - 1 } : item);
    setCart(updatedCart);
  }

  return (
    <main>
      <h1>Products</h1>
      <section>
        <ul>
          {
            products.map(product => {
              return (
                <li key={product.id}>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.category}</p>
                  <img src={product.image} height={200} />
                  <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                </li>
              )
            })
          }
        </ul>
      </section>
      <section>
        <h1>Cart</h1>
        <ul>
          <h1>Products: {cart.reduce((prev, cur) => prev + cur.unit, 0)}</h1>
          <h1>Price: {cart.reduce((prev, cur) => prev + cur.price, 0)}</h1>
          {
              cart.map(prod => (
                  <li key={prod.id}>
                      <p>{prod.title}</p>
                      <p>{prod.price}</p>
                      <p>{prod.category}</p>
                      <img src={prod.image} height={200} />
                      <div>
                        <button onClick={() => handleDecreaseUnit(prod.id)}>-</button>
                        {prod.unit}
                        <button onClick={() => handleIncreaseUnit(prod.id)}>+</button>
                      </div>
                  </li>
              ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Products;
