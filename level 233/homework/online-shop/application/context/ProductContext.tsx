import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { Product } from "../types/product.type";
import api from "../api/axios";

type ProductContextType = {
    products: Product[];
    product: Product | null;
    loading: boolean;
    error: string;

    getProduct: (id: string) => void;
    createProduct: (title: string, description: string) => void;
    deleteProduct: (id: string) => void;
    editProduct: (id: string, title: string, description: string) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const useProduct = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("Comething went wrong!");
    };

    return context;
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            setError("");

            try {
                const response = await api.get("/products");

                setProducts([...response.data.data.products]);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            };
        };

        getProducts();
    }, []);

    const getProduct = async (id: string) => {
        setLoading(true);
        setError("");

        try {
            const response = await api.get(`/products/${id}`);

            setProduct(response.data.data.product);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        };
    };

    const createProduct = async (title: string, description: string) => {
        setLoading(true);
        setError("");

        try {
            const response = await api.post("/products", { title, description });

            setProducts(prev => [...prev, response.data.data.product]);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        };
    };

    const deleteProduct = async (id: string) => {
        setLoading(true);
        setError("");

        try {
            const response = await api.delete(`/products/${id}`);

            setProducts(prev => prev.filter(p => p._id !== id));
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        };
    };

    const editProduct = async (id: string, title: string, description: string) => {
        setLoading(true);
        setError("");

        try {
            const response = await api.patch(`/products/${id}`, { title, description });
            
            setProducts(prev => prev.map(p => p._id === id ? response.data.data.product : p));
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        };
    };
    
    return (
        <ProductContext.Provider value={{ products, product, loading, error, getProduct, createProduct, deleteProduct, editProduct }}>
            {children}
        </ProductContext.Provider>
    );
};