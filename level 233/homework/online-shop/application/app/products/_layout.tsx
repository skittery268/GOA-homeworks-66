import { Stack } from "expo-router"
import { colors } from "../../constants/theme";

const ProductsLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: colors.surface },
                headerTintColor: colors.primary,
                headerTitleStyle: { color: colors.text, fontWeight: "600" },
                headerShadowVisible: false,
                contentStyle: { backgroundColor: colors.background },
            }}
        >
            <Stack.Screen name="index" options={{ title: "Products" }} />
            <Stack.Screen name="[id]" options={{ title: "Product" }} />
            <Stack.Screen name="createProduct" options={{ title: "Create Product" }} />
        </Stack>
    );
};

export default ProductsLayout;