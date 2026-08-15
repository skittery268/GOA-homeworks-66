import EditTaskForm from "@/components/EditTaskForm";
import { Task } from "@/types/tasks";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState<string>("");
    const [editedTaskId, setEditedTaskId] = useState<number | null>(null);

    const addTask = (): void => {
        if (!task) return;

        setTasks((prev: Task[]) => ([...prev, { id: Date.now(), task }]));
        setTask("");
    };

    const handleDelete = (id: number): void => {
        setTasks(prev => prev.filter(t => t.id !== id));
    };

    return (
        <>
            <View style={styles.container}>
                <TextInput value={task} onChangeText={setTask} style={styles.input} />
                <Button title="Add Task" onPress={addTask} />

                <ScrollView style={styles.scroll}>
                    {
                        tasks.map((t, index) => {
                            return (
                                editedTaskId === t.id ? (
                                    <EditTaskForm key={index} t={t} tasks={tasks} setEditedTaskId={setEditedTaskId} />
                                ) : (
                                    <View key={index}>
                                        <Text>{t.task}</Text>
                                        <Button title="Delete" onPress={() => handleDelete(t.id)} />
                                        <Button title="Edit" onPress={() => setEditedTaskId(t.id)} />
                                    </View>
                                )
                            )
                        })
                    }
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 500,
        marginTop: 200
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        width: 200,
        height: 40,
        paddingHorizontal: 10,
    },
    scroll: {
        height: 200,
        width: 200
    }
})

export default App;