import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { products } from "../data/products";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={products}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.rating}>{item.rating}</Text>
                            </View>
                            <Text style={styles.price}>{item.price}</Text>
                            <Pressable
                                onPress={() => navigation.navigate("Details", { id: item.id })}
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
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f4f4f5",
    },
    list: {
        padding: 16,
        gap: 12,
    },
    card: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e4e4e7",
        borderRadius: 12,
        padding: 16,
        gap: 8,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },
    name: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        color: "#18181b",
    },
    rating: {
        fontSize: 14,
        color: "#71717a",
    },
    price: {
        fontSize: 18,
        fontWeight: "700",
        color: "#18181b",
    },
    button: {
        alignSelf: "flex-start",
        marginTop: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: "#18181b",
    },
    buttonPressed: {
        backgroundColor: "#3f3f46",
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#ffffff",
    },
});

export default Home;
