const Products = ({ products, deleteProduct, setProducts }) => {
    const addProduct = (product) => {
        const newProducts = products.map(obj => {
            if (obj === product) {
                return { ...obj, quantity: parseInt(obj.quantity) + 1 };
            }

            return obj;
        })

        setProducts(newProducts);
    }

    const decreaseProduct = (product) => {
        if (product.quantity <= 1) {
            deleteProduct(product);
            return;
        }

        const newProducts = products.map(obj => {
            if (obj === product) {
                return { ...obj, quantity: parseInt(obj.quantity) - 1 }
            }

            return obj;
        })

        setProducts(newProducts)
    }

    return (
        <ul>
            {
                products.length !== 0 && products.map((obj) => {
                    return (
                    <>
                        <li>Name: {obj.userName}</li>
                        <li>Description: {obj.description}</li>
                        <li>Price: {obj.price}</li>
                        <li><button onClick={() => decreaseProduct(obj)}>-</button>{obj.quantity}<button onClick={() => addProduct(obj)}>+</button></li>
                        <button onClick={() => deleteProduct(obj)}>Delete Product</button>
                    </>
                    )
                })
            }
        </ul>
    )
}

export default Products;

