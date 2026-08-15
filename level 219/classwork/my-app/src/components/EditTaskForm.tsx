import { Task } from "@/types/tasks"
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native"

type Props = {
    t: Task,
    setEditedTaskId: (id: number | null) => void,
    tasks: Task[]
}

const EditTaskForm = ({ t, setEditedTaskId, tasks }: Props) => {
    const [editedTaskText, setEditedTaskText] = useState<string>("");

    const handleEdit = (id: number) => {
        if (!editedTaskText) return;

        const choosedTask = tasks.find(t => t.id === id);

        if (!choosedTask) {
            return (
                <View>
                    <Text>Task not found!</Text>
                </View>
            )
        }

        choosedTask.task = editedTaskText;

        setEditedTaskId(null);
    }

    return (
        <View>
            <TextInput value={editedTaskText} onChangeText={setEditedTaskText} />
            <Button title="Edit Task" onPress={() => handleEdit(t.id)} />
        </View>
    );
};

export default EditTaskForm;