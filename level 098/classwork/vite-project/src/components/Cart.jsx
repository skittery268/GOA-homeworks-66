const Cart = ({ cart, price, setCart, handleIncreaseUnit }) => {
    const handleDecreaseUnit = (id) => {
        const item = cart.find(item => item.id === id);

        if(item.unit === 1) {
            const updatedCart = cart.filter(item => item.id !== id);
            setCart(updatedCart);
            return;
        } 

        const updatedCart = cart.map(item => item.id === id ? { ...item, unit: item.unit - 1 } : item);

        setCart(updatedCart)
    };

    return (
        <section>
            <h2>Cart</h2>
            <p>Products: {cart.reduce((prev, cur) => prev + cur.unit, 0)}</p>
            <p>Price: {price}</p>
            <ul>
            {
                cart.map(item => (
                <li key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <img src={item.image} width={100} />
                    <div>
                    <button onClick={() => handleDecreaseUnit(item.id)}>-</button>
                    <span>{item.unit}</span>
                    <button onClick={() => handleIncreaseUnit(item.id)}>+</button>
                    </div>
                </li>
                ))
            }
            </ul>
        </section>
    )
}

export default Cart;
