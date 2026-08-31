import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useMoive } from "../context/MovieContext";
import { useState } from "react";
import { colors, fontSize, radius, spacing } from "../styles/theme";

const Search = () => {
    const [name, setName] = useState<string>("");
    const [focused, setFocused] = useState<boolean>(false);
    const { searchMovie, movie } = useMoive();

    return (
        <View style={styles.screen}>
            <KeyboardAvoidingView style={styles.form}>
                <TextInput
                    style={[styles.input, focused && styles.inputFocused]}
                    value={name}
                    onChangeText={setName}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="Movie title"
                    placeholderTextColor={colors.muted}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </KeyboardAvoidingView>
            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={() => searchMovie(name)}
            >
                <Text style={styles.buttonText}>Search</Text>
            </Pressable>

            <View style={styles.result}>
                {
                    movie ? (
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.name}>{movie.name}</Text>
                                <Text style={styles.rating}>{movie.rating} / 10</Text>
                            </View>
                            <Text style={styles.description}>{movie.description}</Text>
                        </View>
                    ) : (
                        <Text style={styles.hint}>Search a movie by its exact title.</Text>
                    )
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.lg,
        gap: spacing.md,
    },
    form: {
        gap: spacing.md,
    },
    input: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.sm,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.md,
        fontSize: fontSize.md,
        color: colors.text,
    },
    inputFocused: {
        borderColor: colors.primary,
    },
    button: {
        alignSelf: "flex-start",
        backgroundColor: colors.primary,
        borderRadius: radius.sm,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.xl,
    },
    buttonPressed: {
        opacity: 0.75,
    },
    buttonText: {
        fontSize: fontSize.md,
        fontWeight: "600",
        color: colors.surface,
    },
    result: {
        marginTop: spacing.xs,
    },
    hint: {
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
});

export default Search;
