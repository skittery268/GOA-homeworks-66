import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type Task = {
	id: number;
	task: string;
};

export default function App() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [taskMessage, setTaskMessage] = useState<string>("");
	const [editedTaskId, setEditedTaskId] = useState<number | null>(null);

	const handleAddTask = (): void => {
		if (!taskMessage) return;
		
		setTasks(prev => [...prev, { id: Date.now(), task: taskMessage.trim() }]);
		setTaskMessage("");
	};

	const handleDeleteTask = (id: number): void => {
		setTasks(prev => prev.filter(t => t.id !== id));
	};

	const handleEditTask = () => {
		const choosedTask: Task | undefined = tasks.find(t => t.id === editedTaskId);

		if (!choosedTask) {
			return;
		};

		choosedTask.task = taskMessage;
		setEditedTaskId(null);
		setTaskMessage("");
	}

	return (
		<View style={styles.container}>
			<View>
				<TextInput value={taskMessage} onChangeText={setTaskMessage} style={styles.input} />
				{ editedTaskId ? <Button title='Edit' onPress={handleEditTask} /> : <Button title='Add Task' onPress={handleAddTask} /> }
			</View>

			<View style={styles.taskContainer}>
				{
					tasks.map((t, index) => {
						return (
							<View key={index}>
								<Text>{t.task}</Text>
								<Button title='Delete' onPress={() => handleDeleteTask(t.id)} />
								<Button title='Edit' onPress={() => setEditedTaskId(t.id)} />
							</View>
						)
					})
				}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20
	},
	input: {
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 10,
		marginBottom: 10,
		width: 100
	},
	taskContainer: {
		display: "flex",
		gap: 10
	}
});
