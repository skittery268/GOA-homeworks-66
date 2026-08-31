import { StyleSheet, Text, View } from "react-native";
import { colors, fontSize, radius, spacing } from "../styles/theme";

const Profile = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.label}>Name</Text>
                    <Text style={styles.value}>Test Testishvili</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.value}>example@gmail.com</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.lg,
    },
    card: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        paddingHorizontal: spacing.lg,
    },
    row: {
        paddingVertical: spacing.lg,
        gap: spacing.xs,
    },
    divider: {
        height: 1,
        backgroundColor: colors.border,
    },
    label: {
        fontSize: fontSize.sm,
        color: colors.muted,
    },
    value: {
        fontSize: fontSize.lg,
        fontWeight: "500",
        color: colors.text,
    },
});

export default Profile;
