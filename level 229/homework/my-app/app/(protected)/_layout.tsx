import { Redirect, Tabs } from "expo-router";
import { useAuth } from "../../context/AuthContext"
import { tabScreenOptions } from "../../styles/common";

const ProtectedLayout = () => {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href={"(auth)/login"} />;
    };

    return (
        <Tabs screenOptions={tabScreenOptions}>
            <Tabs.Screen name="profile" options={{ title: "Profile", tabBarLabel: "Profile" }} />
            <Tabs.Screen name="products" options={{ title: "Products", tabBarLabel: "Products" }} />
        </Tabs>
    );
};

export default ProtectedLayout;