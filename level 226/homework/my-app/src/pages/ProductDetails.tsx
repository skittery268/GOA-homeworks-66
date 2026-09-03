import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { Product } from "../types/product";
import { products } from "../data/products";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const ProductDetails = ({ route }: Props) => {
    const { id } = route.params;

    const product: Product | undefined = products.find(p => p.id === id); 
    
    if (!product) {
        return (
            <View style={[styles.screen, styles.centered]}>
                <Text style={styles.notFound}>Product not found!</Text>
            </View>
        );
    };

    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.divider} />
                <View style={styles.row}>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.rating}>{product.rating}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f4f4f5",
        padding: 16,
    },
    centered: {
        alignItems: "center",
        justifyContent: "center",
    },
    notFound: {
        fontSize: 16,
        color: "#71717a",
    },
    card: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e4e4e7",
        borderRadius: 12,
        padding: 16,
        gap: 12,
    },
    name: {
        fontSize: 20,
        fontWeight: "700",
        color: "#18181b",
    },
    description: {
        fontSize: 15,
        lineHeight: 22,
        color: "#52525b",
    },
    divider: {
        height: 1,
        backgroundColor: "#e4e4e7",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },
    price: {
        fontSize: 18,
        fontWeight: "700",
        color: "#18181b",
    },
    rating: {
        fontSize: 14,
        color: "#71717a",
    },
});

export default ProductDetails;
