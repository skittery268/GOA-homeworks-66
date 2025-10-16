import { useEffect } from "react";
import { useState } from "react"

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const products = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const request = await response.json();

                setData(request);
            } catch (err) {
                console.error(err)
            }
        }

        products()
    }, [])

    return (
        <>
            {
                data.map((product, index) => {
                    return <ul>
                        <li key={index}>{product.title}</li>
                        <li key={index}>{product.category}</li>
                        <li key={index}>{product.description}</li>
                        <li key={index}>{product.id}</li>
                        <img src={product.image} alt="image" key={index} height={100} />
                        <li key={index}>{product.price}</li>
                        <li key={index}>{product.rating.count}</li>
                        <li key={index}>{product.rating.rate}</li>
                    </ul>
                })
            }
        </>
    )
}

export default Products;
