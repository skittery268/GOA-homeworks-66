import { createContext, ReactNode, useContext, useState } from "react";
import { initProducts } from "../data/products.data";
import { Product } from "../types/Product.type";

type ProductContextType = {
    products: Product[];
    error: string;

    addProduct: (name: string, description: string, price: string, stock: string) => void;
    deleteProduct: (id: number) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const useProduct = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("Context not available!");
    };

    return context;
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>(initProducts);
    const [error, setError] = useState<string>("");

    const addProduct = (name: string, description: string, price: string, stock: string): void => {
        const newProduct: Product = { id: Date.now(), name, description, price: parseInt(price), stock: parseInt(stock) };

        setProducts(prev => [...prev, newProduct]);
    };

    const deleteProduct = (id: number) => {
        const choosedProduct: Product | undefined = products.find(p => p.id === id);

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
    );
};
