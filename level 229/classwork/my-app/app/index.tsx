import { StyleSheet, Text, View } from "react-native"

const Home = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>This is Home Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 16,
        padding: 20,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#111827",
    },
});

export default Home;