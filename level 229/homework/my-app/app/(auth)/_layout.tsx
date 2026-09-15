import { Redirect, Tabs } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import { tabScreenOptions } from "../../styles/common";

const AuthLayout = () => {
    const { user } = useAuth();

    if (user) {
        return <Redirect href={"(protected)/profile"} />
    }

    return (
        <Tabs screenOptions={tabScreenOptions}>
            <Tabs.Screen name="login" options={{ title: "Login", tabBarLabel: "Login" }} />
            <Tabs.Screen name="register" options={{ title: "Register", tabBarLabel: "Register" }} />
        </Tabs>
    )
};

export default AuthLayout;