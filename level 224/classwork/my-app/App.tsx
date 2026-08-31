import { StyleSheet, Text, View, FlatList, Button, Alert, TextInput, ActivityIndicator } from 'react-native';
import { useState } from "react";

interface User {
	id: number | string;
	name: string;
	email: string;
	password: string;
};

export default function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleDeleteUser = (id: number | string) => {
		try {
			setIsLoading(true);
			setTimeout(() => {
				setUsers(prev => prev.filter(u => u.id !== id));
			}, 3000);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	const confirmDelete = (id: number | string) => {
		Alert.alert(
			"Confirm Delete",
			"This action permanent delete choosed user",
			[
				{
					text: "Cancel"
				},
				{
					text: "Confirm",
					onPress: () => handleDeleteUser(id)
				}
			]
		);
	};

	const handleAddUser = () => {
		setUsers(prev => [...prev, { id: Date.now(), name, email, password }]);
		setName("");
		setEmail("");
		setPassword("");
	};

	return (
		<View style={styles.container}>
			<View>
				<TextInput value={name} onChangeText={setName} placeholder='Please enter your name' />
				<TextInput value={email} onChangeText={setEmail} placeholder='Please enter your email' />
				<TextInput value={password} onChangeText={setPassword} placeholder='Please enter your password' />

				<Button title='Add' onPress={handleAddUser} />
			</View>

			<FlatList
				data={users}
				renderItem={({ item }) => {
					return (
						isLoading ? (
							<ActivityIndicator size={'small'} />
						) : (
							<View>
								<Text>{item.name}</Text>
								<Button title="Delete user" onPress={() => confirmDelete(item.id)} />
							</View>
						)
					)
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ecf0f1',
		padding: 8,
	}
});