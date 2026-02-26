import { useNavigate } from "react-router";
import { useProduct } from "../context/ProductContext";

const Shop = () => {
    const { products } = useProduct();
    const navigate = useNavigate();

    return (
        <>
            <h1>Products</h1>
            <ul>
                {
                    products.map(product => {
                        return (
                            <>
                                <li>{product.name}</li>
                                <img src={product.img} />
                                <button onClick={() => navigate(`/product/${product._id}`)}>See More</button>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Shop;