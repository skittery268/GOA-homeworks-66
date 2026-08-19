import { useLocalSearchParams } from "expo-router"
import { StyleSheet, Text, View } from "react-native";
import { useTasks } from "../../context/TasksContext";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import { colors, fontSize, layout, radius, spacing } from "../../theme";

const Task = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { task, loading, error, getTaskById } = useTasks();

    useEffect(() => {
        getTaskById(parseInt(id));
    }, []);

    if (loading) {
        return <Loading />
    };

    return (
        <View style={styles.screen}>
            <View style={styles.content}>
                {
                    error ? (
                        <View style={styles.errorBox}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    ) : (
                        <View style={styles.card}>
                            <Text style={styles.label}>Task</Text>
                            <Text style={styles.taskText}>{task?.task}</Text>
                        </View>
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
    },
    content: {
        width: "100%",
        maxWidth: layout.maxWidth,
        alignSelf: "center",
        padding: spacing.lg,
    },
    card: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.lg,
        padding: spacing.lg,
        gap: spacing.sm,
    },
    label: {
        fontSize: fontSize.sm,
        fontWeight: "600",
        color: colors.muted,
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    taskText: {
        fontSize: fontSize.lg,
        lineHeight: 24,
        color: colors.text,
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
});

export default Task;
