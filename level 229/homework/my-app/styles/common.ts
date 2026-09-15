import { StyleSheet } from "react-native";

export const colors = {
    background: "#f5f5f7",
    surface: "#ffffff",
    border: "#e2e2e7",
    text: "#1c1c1e",
    muted: "#6b6b73",
    primary: "#2563eb",
    primaryPressed: "#1d4ed8",
    danger: "#dc2626",
    dangerBackground: "#fef2f2",
    dangerBorder: "#fecaca",
};

export const tabScreenOptions = {
    headerStyle: { backgroundColor: colors.surface },
    headerTitleStyle: { fontSize: 18, fontWeight: "600", color: colors.text },
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.muted,
    tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
    tabBarLabelStyle: { fontSize: 13, fontWeight: "500" },
    sceneStyle: { backgroundColor: colors.background },
} as const;

export const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    form: {
        width: "100%",
        maxWidth: 420,
        alignSelf: "center",
        gap: 12,
        padding: 24,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
    },
    input: {
        height: 48,
        paddingHorizontal: 14,
        fontSize: 16,
        color: colors.text,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
    },
    inputFocused: {
        borderColor: colors.primary,
    },
    button: {
        height: 48,
        marginTop: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderRadius: 8,
    },
    buttonPressed: {
        backgroundColor: colors.primaryPressed,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#ffffff",
    },
    error: {
        padding: 12,
        backgroundColor: colors.dangerBackground,
        borderWidth: 1,
        borderColor: colors.dangerBorder,
        borderRadius: 8,
    },
    errorText: {
        fontSize: 14,
        color: colors.danger,
    },
});
