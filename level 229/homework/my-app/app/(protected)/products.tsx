import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { useProduct } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import { Redirect } from "expo-router";
import { colors } from "../../styles/common";

const Products = () => {
    const { products, deleteProduct } = useProduct();
    const { user } = useAuth();

    if (!user) {
        return <Redirect href={"(auth)/login"} />
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <View style={styles.meta}>
                                <Text style={styles.rating}>Rating: {item.rating}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                            </View>
                            <Pressable
                                onPress={() => deleteProduct(item.id)}
                                style={({ pressed }) => [styles.deleteButton, pressed && styles.deleteButtonPressed]}
                            >
                                <Text style={styles.deleteButtonText}>Delete</Text>
                            </Pressable>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        width: "100%",
        maxWidth: 720,
        alignSelf: "center",
        gap: 12,
        padding: 16,
    },
    card: {
        gap: 8,
        padding: 16,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        color: colors.text,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.muted,
    },
    meta: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rating: {
        fontSize: 14,
        color: colors.muted,
    },
    price: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.text,
    },
    deleteButton: {
        alignSelf: "flex-start",
        marginTop: 4,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: colors.dangerBorder,
        borderRadius: 8,
    },
    deleteButtonPressed: {
        backgroundColor: colors.dangerBackground,
    },
    deleteButtonText: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.danger,
    },
});

export default Products;
