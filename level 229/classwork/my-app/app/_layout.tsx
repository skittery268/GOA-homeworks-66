import { Tabs } from "expo-router"

const RootTabNavigator = () => {
    const isLoggedIn = true;

    return (
        <Tabs
            screenOptions={{
                headerTitleStyle: { fontSize: 17, fontWeight: "600", color: "#111827" },
                tabBarActiveTintColor: "#2563eb",
                tabBarInactiveTintColor: "#6b7280",
                tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
                tabBarStyle: { borderTopColor: "#e5e7eb" },
                sceneStyle: { backgroundColor: "#f5f5f7" },
            }}
        >
            <Tabs.Screen name="index" options={{ tabBarLabel: "Home" }} />

            <Tabs.Protected guard={isLoggedIn}>
                <Tabs.Screen name="(shop)" options={{ headerShown: false, tabBarLabel: "Products" }} />
            </Tabs.Protected>

            <Tabs.Screen name="about" options={{ tabBarLabel: "About Us" }} />
        </Tabs>
    )
};

export default RootTabNavigator;
