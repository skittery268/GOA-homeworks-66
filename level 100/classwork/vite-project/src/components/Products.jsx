const Products = ({ products, deleteProduct }) => {
    return (
        <ul>
            {
                products.length !== 0 && products.map((obj) => {
                    return (
                    <>
                        <li>Name: {obj.userName}</li>
                        <li>Description: {obj.description}</li>
                        <li>Price: {obj.price}</li>
                        <li>Quantity: {obj.quantity}</li>
                        <button onClick={() => deleteProduct(obj)}>Delete Product</button>
                    </>
                    )
                })
            }
        </ul>
    )
}

export default Products;

