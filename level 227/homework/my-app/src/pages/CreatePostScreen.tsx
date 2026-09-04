import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { usePost } from "../context/PostsContext";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { colors, font, radius, spacing } from "../theme";

type Props = NativeStackScreenProps<RootStackParamList, "CreatePostScreen">;

const CreatePostScreen = ({ navigation }: Props) => {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [focused, setFocused] = useState<string | null>(null);
    const { createPost } = usePost();
    
    const handleCreatePost = () => {
        createPost(title.trim(), body.trim(), "Saba Dzidzikashvili");
        navigation.goBack();
    };

    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <View style={styles.field}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={[styles.input, focused === "title" && styles.inputFocused]}
                        placeholderTextColor={colors.muted}
                        onFocus={() => setFocused("title")}
                        onBlur={() => setFocused(null)}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Please enter post title"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Body</Text>
                    <TextInput
                        style={[styles.input, styles.textArea, focused === "body" && styles.inputFocused]}
                        placeholderTextColor={colors.muted}
                        onFocus={() => setFocused("body")}
                        onBlur={() => setFocused(null)}
                        multiline
                        value={body}
                        onChangeText={setBody}
                        placeholder="Please enter post body"
                    />
                </View>
                <View style={styles.actions}>
                    <Pressable
                        style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}
                        onPress={handleCreatePost}
                    >
                        <Text style={styles.primaryButtonText}>Create</Text>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.lg
    },
    card: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        padding: spacing.lg,
        gap: spacing.lg
    },
    field: {
        gap: spacing.xs
    },
    label: {
        fontSize: font.sm,
        fontWeight: "500",
        color: colors.muted
    },
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.sm,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.md,
        fontSize: font.md,
        color: colors.text,
        backgroundColor: colors.surface
    },
    inputFocused: {
        borderColor: colors.primary
    },
    textArea: {
        minHeight: 120,
        textAlignVertical: "top"
    },
    actions: {
        flexDirection: "row",
        gap: spacing.sm
    },
    button: {
        flex: 1,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: radius.sm,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface,
        alignItems: "center"
    },
    buttonPressed: {
        backgroundColor: colors.pressed
    },
    buttonText: {
        fontSize: font.md,
        fontWeight: "500",
        color: colors.text
    },
    primaryButton: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: radius.sm,
        alignItems: "center"
    },
    primaryButtonPressed: {
        backgroundColor: colors.primaryPressed
    },
    primaryButtonText: {
        color: colors.surface,
        fontSize: font.md,
        fontWeight: "600"
    }
});

export default CreatePostScreen;
