import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { RootStackParamList } from "../App";
import { Post } from "../types/post";
import { usePost } from "../context/PostsContext";
import { colors, font, radius, spacing } from "../theme";

type Props = NativeStackScreenProps<RootStackParamList, "PostDetailsScreen">;

const PostDetailsScreen = ({ route, navigation }: Props) => {
    const { id } = route.params;
    const { posts, deletePost } = usePost();

    const post: Post | undefined = posts.find(p => p.id === id);

    if (!post) {
        return (
            <View style={[styles.screen, styles.emptyState]}>
                <Text style={styles.emptyText}>Post not found!</Text>
            </View>
        );
    };

    const handleDelete = () => {
        deletePost(id);
        navigation.goBack();
    };
    
    return (
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
            <View style={styles.card}>
                <Text style={styles.author}>{post.author}</Text>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.body}>{post.body}</Text>
                <Text style={styles.meta}>{post.likes} likes · {post.comments} comments</Text>
            </View>
            <View style={styles.actions}>
                <Pressable
                    style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}
                    onPress={() => navigation.navigate("EditPostScreen", { id })}
                >
                    <Text style={styles.primaryButtonText}>Edit</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [styles.button, styles.dangerButton, pressed && styles.dangerButtonPressed]}
                    onPress={handleDelete}
                >
                    <Text style={[styles.buttonText, styles.dangerButtonText]}>Delete</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background
    },
    content: {
        padding: spacing.lg,
        gap: spacing.md
    },
    emptyState: {
        alignItems: "center",
        justifyContent: "center",
        padding: spacing.xl
    },
    emptyText: {
        fontSize: font.md,
        color: colors.muted
    },
    card: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        padding: spacing.lg,
        gap: spacing.sm
    },
    author: {
        fontSize: font.sm,
        fontWeight: "500",
        color: colors.muted
    },
    title: {
        fontSize: font.xl,
        fontWeight: "600",
        color: colors.text
    },
    body: {
        fontSize: font.md,
        lineHeight: 22,
        color: colors.text
    },
    meta: {
        fontSize: font.sm,
        color: colors.muted,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        paddingTop: spacing.sm
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
    buttonText: {
        fontSize: font.md,
        fontWeight: "500",
        color: colors.text
    },
    dangerButton: {
        borderColor: colors.danger
    },
    dangerButtonPressed: {
        backgroundColor: colors.dangerSurface
    },
    dangerButtonText: {
        color: colors.danger
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

export default PostDetailsScreen;
