import { ScrollView, StyleSheet, Text, View } from "react-native"
import { useTasks } from "../context/TasksContext";
import Loading from "../components/Loading";
import { Link } from "expo-router";
import AddTask from "../components/AddTask";
import { useState } from "react";
import EditTask from "../components/EditTask";
import Button from "../components/Button";
import { colors, fontSize, layout, radius, spacing } from "../theme";

const Tasks = () => {
    const { tasks, loading, error, deleteTask } = useTasks();
    const [editedTaskId, setEditedTaskId] = useState<number | null>(null);

    if (loading) {
        return <Loading />
    };

    return (
        <ScrollView
            style={styles.screen}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
        >
            <AddTask />

            {
                error ? (
                    <View style={styles.errorBox}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                ) : null
            }

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tasks</Text>

                {
                    tasks.length === 0 ? (
                        <View style={styles.emptyBox}>
                            <Text style={styles.emptyTitle}>No tasks yet</Text>
                            <Text style={styles.emptyText}>Add your first task above.</Text>
                        </View>
                    ) : (
                        <View style={styles.list}>
                            {
                                tasks.map((t, index) => {
                                    return (
                                        editedTaskId !== t.id ? (
                                            <View key={index} style={styles.card}>
                                                <Text style={styles.taskText}>{t.task}</Text>

                                                <Link href={`task/${t.id}`} style={styles.detailsLink}>
                                                    View Details
                                                </Link>

                                                <View style={styles.actions}>
                                                    <Button
                                                        title="Edit"
                                                        onPress={() => setEditedTaskId(t.id)}
                                                        variant="secondary"
                                                        size="sm"
                                                    />
                                                    <Button
                                                        title="Delete"
                                                        onPress={() => deleteTask(t.id)}
                                                        variant="danger"
                                                        size="sm"
                                                    />
                                                </View>
                                            </View>
                                        ) : (
                                            <EditTask key={index} id={t.id} setEditedTaskId={setEditedTaskId} />
                                        )
                                    );
                                })
                            }
                        </View>
                    )
                }
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        width: "100%",
        maxWidth: layout.maxWidth,
        alignSelf: "center",
        padding: spacing.lg,
        gap: spacing.lg,
    },
    section: {
        gap: spacing.md,
    },
    sectionTitle: {
        fontSize: fontSize.sm,
        fontWeight: "600",
        color: colors.muted,
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    list: {
        gap: spacing.md,
    },
    card: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.lg,
        padding: spacing.lg,
        gap: spacing.sm,
    },
    taskText: {
        fontSize: fontSize.md,
        lineHeight: 22,
        fontWeight: "500",
        color: colors.text,
    },
    detailsLink: {
        fontSize: fontSize.sm,
        color: colors.muted,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: spacing.sm,
        marginTop: spacing.xs,
    },
    errorBox: {
        backgroundColor: colors.dangerSurface,
        borderWidth: 1,
        borderColor: colors.dangerBorder,
        borderRadius: radius.md,
        padding: spacing.md,
    },
    errorText: {
        fontSize: fontSize.sm,
        color: colors.danger,
    },
    emptyBox: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.lg,
        paddingVertical: spacing.xxl,
        paddingHorizontal: spacing.lg,
        alignItems: "center",
        gap: spacing.xs,
    },
    emptyTitle: {
        fontSize: fontSize.md,
        fontWeight: "600",
        color: colors.text,
    },
    emptyText: {
        fontSize: fontSize.sm,
        color: colors.muted,
    },
});

export default Tasks;
