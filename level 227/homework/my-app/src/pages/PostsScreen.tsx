import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { usePost } from "../context/PostsContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { colors, font, radius, spacing } from "../theme";

type Props = NativeStackScreenProps<RootStackParamList, "PostsScreen">;

const PostsScreen = ({ navigation }: Props) => {
    const { posts, deletePost } = usePost();
    
    return (
        <View style={styles.screen}>
            <Pressable
                style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}
                onPress={() => navigation.navigate("CreatePostScreen")}
            >
                <Text style={styles.primaryButtonText}>Create Post</Text>
            </Pressable>
            <FlatList
                data={posts}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
                            <Text style={styles.cardMeta}>{item.likes} likes · {item.comments} comments</Text>
                            <View style={styles.cardActions}>
                                <Pressable
                                    style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                                    onPress={() => navigation.navigate("PostDetailsScreen", { id: item.id })}
                                >
                                    <Text style={styles.buttonText}>Details</Text>
                                </Pressable>
                                <Pressable
                                    style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                                    onPress={() => navigation.navigate("EditPostScreen", { id: item.id })}
                                >
                                    <Text style={styles.buttonText}>Edit</Text>
                                </Pressable>
                                <Pressable
                                    style={({ pressed }) => [styles.button, styles.dangerButton, pressed && styles.dangerButtonPressed]}
                                    onPress={() => deletePost(item.id)}
                                >
                                    <Text style={[styles.buttonText, styles.dangerButtonText]}>Delete</Text>
                                </Pressable>
                            </View>
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
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.lg,
        gap: spacing.md
    },
    list: {
        gap: spacing.md,
        paddingBottom: spacing.xl
    },
    card: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        padding: spacing.lg,
        gap: spacing.sm
    },
    cardTitle: {
        fontSize: font.lg,
        fontWeight: "600",
        color: colors.text
    },
    cardMeta: {
        fontSize: font.sm,
        color: colors.muted
    },
    cardActions: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: spacing.sm,
        marginTop: spacing.xs
    },
    button: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        borderRadius: radius.sm,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface
    },
    buttonPressed: {
        backgroundColor: colors.pressed
    },
    buttonText: {
        fontSize: font.sm,
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

export default PostsScreen;
