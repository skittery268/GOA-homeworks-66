import { Tabs } from "expo-router"
import { ProductProvider } from "../context/ProductsContext";

const RootLayout = () => {
    return (
        <ProductProvider>
            <Tabs>
                <Tabs.Screen name="products" options={{ tabBarLabel: "Products" }} />
                <Tabs.Screen name="addProduct" options={{ tabBarLabel: "Add Product" }} />
                <Tabs.Screen name="index" options={{ href: null }} />
                <Tabs.Screen name="[id]" options={{ tabBarLabel: "Product", href: null }} />
            </Tabs>
        </ProductProvider>
    );
};

export default RootLayout;