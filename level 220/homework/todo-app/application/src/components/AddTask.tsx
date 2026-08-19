import { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { useTasks } from "../context/TasksContext";
import Button from "./Button";
import { colors, fontSize, layout, radius, spacing } from "../theme";

const AddTask = () => {
    const [task, setTask] = useState<string>("");
    const { createTask } = useTasks();

    const handleSubmit = async () => {
        if (task.trim() === "") return;

        await createTask(task.trim());
    };

    return (
        <View style={styles.card}>
            <Text style={styles.label}>New task</Text>

            <TextInput
                value={task}
                onChangeText={setTask}
                placeholder="What needs to be done?"
                placeholderTextColor={colors.muted}
                style={styles.input}
            />

            <Button title="Add Task" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
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
    },
    input: {
        height: layout.controlHeight,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        paddingHorizontal: spacing.md,
        fontSize: fontSize.md,
        color: colors.text,
        backgroundColor: colors.surface,
    },
});

export default AddTask;
