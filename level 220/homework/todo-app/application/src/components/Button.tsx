import { Pressable, StyleSheet, Text } from "react-native";
import { colors, fontSize, layout, radius, spacing } from "../theme";

type Variant = "primary" | "secondary" | "danger";
type Size = "md" | "sm";

const Button = ({
    title,
    onPress,
    variant = "primary",
    size = "md",
}: {
    title: string;
    onPress: () => void;
    variant?: Variant;
    size?: Size;
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.base,
                size === "sm" && styles.sizeSm,
                styles[variant],
                pressed && styles.pressed,
            ]}
        >
            <Text style={[styles.label, size === "sm" && styles.labelSm, textStyles[variant]]}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    base: {
        height: layout.controlHeight,
        paddingHorizontal: spacing.lg,
        borderRadius: radius.md,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    sizeSm: {
        height: 36,
        paddingHorizontal: spacing.md,
    },
    primary: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.surface,
        borderColor: colors.border,
    },
    danger: {
        backgroundColor: colors.dangerSurface,
        borderColor: colors.dangerBorder,
    },
    pressed: {
        opacity: 0.75,
    },
    label: {
        fontSize: fontSize.md,
        fontWeight: "600",
    },
    labelSm: {
        fontSize: fontSize.sm,
    },
});

const textStyles = StyleSheet.create({
    primary: { color: colors.primaryText },
    secondary: { color: colors.text },
    danger: { color: colors.danger },
});

export default Button;
