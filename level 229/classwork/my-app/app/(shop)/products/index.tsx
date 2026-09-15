import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { products } from "../../../data/products"
import { router } from "expo-router"

const Products = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
                            <Pressable
                                accessibilityRole="button"
                                onPress={() => router.navigate(`/products/${item.id}`)}
                                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                            >
                                <Text style={styles.buttonText}>Details</Text>
                            </Pressable>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        width: "100%",
        maxWidth: 720,
        alignSelf: "center",
        padding: 16,
        gap: 12,
    },
    card: {
        padding: 16,
        gap: 12,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 8,
        backgroundColor: "#f3f4f6",
    },
    button: {
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: "#2563eb",
    },
    buttonPressed: {
        backgroundColor: "#1d4ed8",
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#ffffff",
    },
});

export default Products;