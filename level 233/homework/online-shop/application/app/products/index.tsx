import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { useProduct } from "../../context/ProductContext";
import { router } from "expo-router";
import { colors, radius, spacing } from "../../constants/theme";

const Products = () => {
    const { products, deleteProduct } = useProduct();

    return (
        <View style={styles.container}>
            <Pressable
                accessibilityRole="button"
                style={({ pressed }) => [styles.createButton, pressed && styles.pressed]}
                onPress={() => router.push("/products/createProduct")}
            >
                <Text style={styles.createButtonText}>Create product</Text>
            </Pressable>

            <FlatList
                data={products}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.title}>{item.title}</Text>

                            <View style={styles.actions}>
                                <Pressable
                                    accessibilityRole="button"
                                    style={({ pressed }) => [styles.actionButton, styles.viewButton, pressed && styles.pressed]}
                                    onPress={() => router.push({ pathname: "/products/[id]", params: { id: item._id } })}
                                >
                                    <Text style={[styles.actionText, styles.viewText]}>View More</Text>
                                </Pressable>

                                <Pressable
                                    accessibilityRole="button"
                                    style={({ pressed }) => [styles.actionButton, styles.deleteButton, pressed && styles.pressed]}
                                    onPress={() => deleteProduct(item._id)}
                                >
                                    <Text style={[styles.actionText, styles.deleteText]}>Delete Product</Text>
                                </Pressable>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={(item) => item._id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    createButton: {
        margin: spacing.lg,
        paddingVertical: 14,
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: radius.md,
    },
    createButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.surface,
    },
    list: {
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.xl,
    },
    card: {
        marginBottom: spacing.md,
        padding: spacing.lg,
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        borderWidth: 1,
        borderColor: colors.border,
    },
    title: {
        marginBottom: spacing.md,
        fontSize: 17,
        fontWeight: "600",
        color: colors.text,
    },
    actions: {
        flexDirection: "row",
        gap: spacing.sm,
    },
    actionButton: {
        flex: 1,
        paddingVertical: spacing.md,
        alignItems: "center",
        borderRadius: radius.sm,
    },
    actionText: {
        fontSize: 14,
        fontWeight: "600",
    },
    viewButton: {
        backgroundColor: colors.primarySoft,
    },
    viewText: {
        color: colors.primary,
    },
    deleteButton: {
        backgroundColor: colors.dangerSoft,
    },
    deleteText: {
        color: colors.danger,
    },
    pressed: {
        opacity: 0.8,
    },
});

export default Products;