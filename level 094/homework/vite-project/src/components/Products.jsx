import { useState } from "react"

const Products = () => {
    const [products, setProducts] = useState(["Product 1", "Product 2"]);

    const handleClick = () => {
        const newProduct = `Product ${products.length + 1}`;

        setProducts(product => [...product, newProduct]);
    }

    const deleteProduct = (index) => {
        const newProducts = products.filter((_, ind) => ind !== index);

        setProducts([...newProducts]);
    }

    return (
        <>
            <ul>
                {
                    products.map((product, index) => {
                        return <li onClick={() => deleteProduct(index)} key={product}>{product}</li>
                    })
                }
            </ul>
            <button onClick={handleClick}>Click here to add product</button>
        </>
    )
}

export default Products;

