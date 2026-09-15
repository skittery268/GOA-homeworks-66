import { Stack } from "expo-router"
import { AuthProvider } from "../context/AuthContext"
import { ProductProvider } from "../context/ProductContext";

const RootLayout = () => {
    return (
        <AuthProvider>
            <ProductProvider>
                <Stack>
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="(protected)" options={{ headerShown: false }} />
                </Stack>
            </ProductProvider>
        </AuthProvider>
    );
};

export default RootLayout;