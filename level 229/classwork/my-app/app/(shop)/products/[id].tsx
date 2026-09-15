import { useLocalSearchParams } from "expo-router"
import { Image, StyleSheet, Text, View } from "react-native";
import { Product, products } from "../../../data/products";

const ProductDetails = () => {
    const { id }: { id: string } = useLocalSearchParams();

    const product: Product | undefined = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <View style={styles.card}>
                <Text style={styles.description}>Product not found!</Text>
            </View>
        );
    };

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 16,
        padding: 16,
        gap: 12,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111827",
    },
    description: {
        fontSize: 15,
        lineHeight: 22,
        color: "#4b5563",
    },
    image: {
        width: "100%",
        height: 240,
        borderRadius: 8,
        backgroundColor: "#f3f4f6",
    },
});

export default ProductDetails;