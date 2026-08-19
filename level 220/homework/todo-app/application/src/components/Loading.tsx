import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import { colors, fontSize, spacing } from "../theme";

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={colors.muted} />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "center",
        gap: spacing.md,
        padding: spacing.lg,
    },
    text: {
        fontSize: fontSize.md,
        color: colors.muted,
    },
});

export default Loading;
