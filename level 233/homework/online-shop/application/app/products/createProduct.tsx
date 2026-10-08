import { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { useProduct } from "../../context/ProductContext";
import { colors, radius, spacing } from "../../constants/theme";

const createProductForm = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const { createProduct } = useProduct();

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} />

            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={setDescription} />

            <Pressable
                accessibilityRole="button"
                style={({ pressed }) => [styles.button, pressed && styles.pressed]}
                onPress={() => createProduct(title, description)}
            >
                <Text style={styles.buttonText}>Create Product</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
        backgroundColor: colors.background,
    },
    label: {
        marginBottom: spacing.xs,
        fontSize: 14,
        fontWeight: "600",
        color: colors.text,
    },
    input: {
        height: 48,
        marginBottom: spacing.lg,
        paddingHorizontal: 14,
        fontSize: 16,
        color: colors.text,
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        borderWidth: 1,
        borderColor: colors.border,
    },
    button: {
        marginTop: spacing.sm,
        paddingVertical: 14,
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: radius.md,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.surface,
    },
    pressed: {
        opacity: 0.8,
    },
});

export default createProductForm;