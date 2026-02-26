import { useProduct } from "../context/ProductContext";

const Admin = () => {
    const { products, createProduct, deleteProduct } = useProduct();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            price: e.target.price.value,
            stock: e.target.quantity.value,
            description: e.target.description.value,
            img: e.target.image.value
        }

        createProduct(data);
    }
    
    return (
        <>  
            <h1>Products</h1>
            <ul>
                {
                    products.map(product => {
                        return (
                            <>
                                <li>{product.name}</li>
                                <li>{product.price}</li>
                                <li>{product.stock}</li>
                                <li>{product.description}</li>
                                <img src={product.img} />
                                <button onClick={() => deleteProduct(product._id)}>Delete</button>
                            </>
                        )
                    })
                }
            </ul>
            
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="product name" required /> <br />
                <input type="number" name="price" placeholder="product price" required /> <br />
                <input type="number" name="quantity" placeholder="product quantity" required /> <br />
                <input type="text" name="description" placeholder="product description" required /> <br />
                <input type="url" name="image" placeholder="product image URL" required /> <br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Admin;