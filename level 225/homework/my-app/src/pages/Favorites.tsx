import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useMoive } from "../context/MovieContext";
import { colors, fontSize, radius, spacing } from "../styles/theme";

const Favorite = () => {
    const { whishList, deleteFromWhishList } = useMoive();

    return (
        <View style={styles.screen}>
            <FlatList
                data={whishList}
                contentContainerStyle={[styles.list, whishList.length === 0 && styles.listEmpty]}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Text style={styles.empty}>Your whish list is empty.</Text>}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.rating}>{item.rating} / 10</Text>
                            </View>
                            <Text style={styles.description}>{item.description}</Text>
                            <Pressable
                                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                                onPress={() => deleteFromWhishList(item.id)}
                            >
                                <Text style={styles.buttonText}>Delete from whish list</Text>
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
    listEmpty: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    empty: {
        fontSize: fontSize.md,
        color: colors.muted,
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
        borderColor: colors.danger,
        backgroundColor: colors.dangerSoft,
        borderRadius: radius.sm,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
    },
    buttonPressed: {
        opacity: 0.75,
    },
    buttonText: {
        fontSize: fontSize.md,
        fontWeight: "600",
        color: colors.danger,
    },
});

export default Favorite;
