import { Navigate, useParams } from "react-router";
import { useProduct } from "../context/ProductContext";

const Product = () => {
    const { products } = useProduct();
    const { id } = useParams();

    if (!id) {
        return Navigate("/products");
    }

    const product = products.find(p => p._id === id);

    return (
        <>
            <h1>{product.name}</h1>
            <img src={product.img} />
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </>
    )
}

export default Product;