import { Dispatch, useState, SetStateAction } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { useTasks } from "../context/TasksContext";
import Button from "./Button";
import { colors, fontSize, layout, radius, spacing } from "../theme";

const EditTask = ({ id, setEditedTaskId }: { id: number, setEditedTaskId: Dispatch<SetStateAction<number | null>> }) => {
    const [task, setTask] = useState<string>("");
    const { editTask } = useTasks();

    const handleSubmit = async () => {
        if (task.trim() === "") return;

        await editTask(id, task.trim());
        setEditedTaskId(null);
    };

    return (
        <View style={styles.card}>
            <Text style={styles.label}>Edit task</Text>

            <TextInput
                value={task}
                onChangeText={setTask}
                placeholder="Update the task"
                placeholderTextColor={colors.muted}
                style={styles.input}
            />

            <View style={styles.actions}>
                <Button title="Cancel" onPress={() => setEditedTaskId(null)} variant="secondary" />
                <Button title="Edit Task" onPress={handleSubmit} />
            </View>
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
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: spacing.sm,
    },
});

export default EditTask;
