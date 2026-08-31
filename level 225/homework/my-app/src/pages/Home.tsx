import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useMoive } from "../context/MovieContext";
import { colors, fontSize, radius, spacing } from "../styles/theme";

const Home = () => {
    const { movies, whishList, addInWhishList, deleteFromWhishList } = useMoive();

    return (
        <View style={styles.screen}>
            <FlatList
                data={movies}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    const existInWhishList = whishList.find(f => f.id === item.id);

                    return (
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.rating}>{item.rating} / 10</Text>
                            </View>
                            <Text style={styles.description}>{item.description}</Text>
                            <Pressable
                                style={({ pressed }) => [
                                    styles.button,
                                    existInWhishList && styles.buttonDanger,
                                    pressed && styles.buttonPressed,
                                ]}
                                onPress={() => existInWhishList ? deleteFromWhishList(item.id) : addInWhishList(item)}
                            >
                                <Text style={[styles.buttonText, existInWhishList && styles.buttonTextDanger]}>
                                    {existInWhishList ? "Delete from whish list" : "Add In Whish List"}
                                </Text>
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
        backgroundColor: colors.background,
    },
    list: {
        padding: spacing.lg,
        gap: spacing.md,
    },
    card: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        padding: spacing.lg,
        gap: spacing.sm,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: spacing.md,
    },
    name: {
        flex: 1,
        fontSize: fontSize.lg,
        fontWeight: "600",
        color: colors.text,
    },
    rating: {
        fontSize: fontSize.sm,
        fontWeight: "600",
        color: colors.primary,
        backgroundColor: colors.primarySoft,
        borderRadius: radius.sm,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.sm,
        overflow: "hidden",
    },
    description: {
        fontSize: fontSize.md,
        lineHeight: 22,
        color: colors.muted,
    },
    button: {
        marginTop: spacing.xs,
        alignSelf: "flex-start",
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        borderRadius: radius.sm,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
    },
    buttonDanger: {
        backgroundColor: colors.dangerSoft,
        borderColor: colors.danger,
    },
    buttonPressed: {
        opacity: 0.75,
    },
    buttonText: {
        fontSize: fontSize.md,
        fontWeight: "600",
        color: colors.surface,
    },
    buttonTextDanger: {
        color: colors.danger,
    },
});

export default Home;
