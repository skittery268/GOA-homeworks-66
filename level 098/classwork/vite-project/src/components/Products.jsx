const Products = ({ cart, setCart, handleIncreaseUnit, products }) => {
    const handleAddToCart = (prod) => {
        const isInCart = cart.find(item => item.id === prod.id);

        if(!isInCart) {
            const product = { ...prod, unit: 1 };
            setCart([...cart, product]);
        } else {
            handleIncreaseUnit(prod.id);   
        }
    };


    return (
        <section>
            <h2>Product List</h2>
            <ul>
            {
                products.map(product => (
                    <li key={product.id}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <img src={product.image} width={100} />
                    <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                    </li>
                )
                )
            }
            </ul> 
      </section>
    )
}

export default Products;

