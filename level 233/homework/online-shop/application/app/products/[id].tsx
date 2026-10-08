import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import { useProduct } from "../../context/ProductContext";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { colors, radius, spacing } from "../../constants/theme";

const Product = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { product, getProduct } = useProduct();

    useEffect(() => {
        getProduct(id);
    }, [id]);

    if (!product) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size={"large"} color={colors.primary} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
    },
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
        marginBottom: spacing.sm,
        fontSize: 22,
        fontWeight: "700",
        color: colors.text,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.textMuted,
    },
});

export default Product;