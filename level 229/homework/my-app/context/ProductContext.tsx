import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../types/productType";
import { initProducts } from "../data/products";

type ProductContextType = {
    products: Product[];
    error: string;
    
    addProduct: (title: string, description: string, image: string, rating: number, price: number) => void;
    deleteProduct: (id: number) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const useProduct = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("Something went wrong!");
    };

    return context;
};

export const ProductProvider = ({ children } : { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>(initProducts);
    const [error, setError] = useState<string>("");
    
    const addProduct = (title: string, description: string, image: string, rating: number, price: number) => {
        const newProduct: Product = { id: Date.now(), title, description, image, rating, price };

        setProducts(prev => [...prev, newProduct]);
    };

    const deleteProduct = (id: number) => {
        const choosedProduct = products.find(p => p.id === id);

        if (!choosedProduct) {
            setError("Product not found!");
            return;
        };

        setProducts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, error, addProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    )
}