import { Tabs } from "expo-router"
import { ProductProvider } from "../context/ProductContext";
import { colors } from "../constants/theme";

const RootLayout = () => {
    return (
        <ProductProvider>
            <Tabs
                screenOptions={{
                    headerStyle: { backgroundColor: colors.surface },
                    headerTitleStyle: { color: colors.text, fontWeight: "600" },
                    headerShadowVisible: false,
                    sceneStyle: { backgroundColor: colors.background },
                    tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.textMuted,
                    tabBarIconStyle: { display: "none" },
                    tabBarItemStyle: { justifyContent: "center" },
                    tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
                }}
            >
                <Tabs.Screen name="index" options={{ title: "Home" }} />
                <Tabs.Screen name="products" options={{ title: "Products", headerShown: false }} />
            </Tabs>
        </ProductProvider>
    );
};

export default RootLayout;