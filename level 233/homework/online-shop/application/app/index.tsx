import { StyleSheet, Text, View } from "react-native"
import { colors, radius, spacing } from "../constants/theme";

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>This is home screen!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
        backgroundColor: colors.background,
    },
    card: {
        padding: spacing.xl,
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        borderWidth: 1,
        borderColor: colors.border,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: colors.text,
    },
});

export default Home;