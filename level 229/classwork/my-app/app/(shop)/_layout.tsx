import { Stack } from "expo-router"

const ShopStackNavigator = () => {
    return (
        <Stack
            screenOptions={{
                headerTintColor: "#2563eb",
                headerTitleStyle: { fontWeight: "600", color: "#111827" },
                contentStyle: { backgroundColor: "#f5f5f7" },
            }}
        >
            <Stack.Screen name="products/index" options={{ headerTitle: "Products" }} />
            <Stack.Screen name="products/[id]" options={{ headerTitle: "Product" }} />
        </Stack>
    );
};

export default ShopStackNavigator;
