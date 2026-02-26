import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const ProductContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useProduct = () => useContext(ProductContext);

const API_URL = "http://localhost:3000/api";

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const createProduct = async (data) => {
        try {
            const res = await fetch(`${API_URL}/product`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const newProduct = await res.json();

            if (!res.ok) {
                throw new Error(newProduct.message);
            }

            setProducts((prev) => [...prev, newProduct]);
        } catch(err) {
            console.log(err);
        }
    }

    const getAllProducts = async () => {
        try {
            const res = await fetch(`${API_URL}/products`);

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            setProducts(data);
        } catch(err) {
            console.log(err);
        }
    }

    const deleteProduct = async (id) => {
        try {
            const res = await fetch(`${API_URL}/product/${id}`, {
                method: "DELETE"
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message);
            }

            alert("Product deleted successfully");
            setProducts(prev => prev.filter(product => product._id !== id));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <ProductContext.Provider value={{ products, createProduct, getAllProducts, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    )
}