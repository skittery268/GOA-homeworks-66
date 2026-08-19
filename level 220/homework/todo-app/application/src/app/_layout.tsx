import { Stack } from "expo-router";
import { TaskProvider } from "../context/TasksContext";
import { colors, fontSize } from "../theme";

const Layout = () => {
    return (
        <TaskProvider>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: colors.surface },
                    headerTitleStyle: {
                        color: colors.text,
                        fontSize: fontSize.lg,
                        fontWeight: "600",
                    },
                    headerTintColor: colors.text,
                    headerShadowVisible: false,
                    contentStyle: { backgroundColor: colors.background },
                }}
            >
                <Stack.Screen name="index" options={{ title: "Home" }} />
                <Stack.Screen name="tasks" options={{ title: "Tasks" }} />
                <Stack.Screen name="task/[id]" options={{ title: "Task" }} />
            </Stack>
        </TaskProvider>
    );
};

export default Layout;
