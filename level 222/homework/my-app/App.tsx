import { useState } from 'react';
import { Button, KeyboardAvoidingView, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

interface Settings {
	id: number;
	name: string;
	email: string;
	password: string;
};

export default function App() {
	const [settings, setSettings] = useState<Settings>({ id: 0, name: "", email: "", password: "" });
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isEdit, setIsEdit] = useState<boolean>(false);

	const handleSubmit = (mode: string = "submit") => {
		setSettings({
			id: Date.now(),
			name,
			email,
			password
		});

		if (mode === "edit") {
			setIsEdit(false);
		};
	};

	return (
		<View style={styles.container}>
			<KeyboardAvoidingView>
				<Text>Add Settings</Text>

				<TextInput value={name} onChangeText={setName} placeholder='Please enter your name' />
				<TextInput value={email} textContentType='emailAddress' keyboardType='email-address' onChangeText={setEmail} placeholder='Please enter your email' />
				<TextInput value={password} textContentType='password' onChangeText={setPassword} placeholder='Please enter your password' />
				<Switch value={isActive} onValueChange={setIsActive} />

				<Pressable onPress={() => handleSubmit("submit")}>
					<Text>Save</Text>
				</Pressable>
			</KeyboardAvoidingView>

			<View>
				{
					isEdit ? (
						<View>
							<TextInput value={name} onChangeText={setName} placeholder='Please enter your name' />
							<TextInput value={email} textContentType='emailAddress' keyboardType='email-address' onChangeText={setEmail} placeholder='Please enter your email' />
							<TextInput value={password} textContentType='password' onChangeText={setPassword} placeholder='Please enter your password' />

							<Pressable onPress={() => handleSubmit("edit")}>
								<Text>Save</Text>
							</Pressable>
						</View>
					) : (
						<View>
							<Text>{settings.name} - {settings.id}</Text>
							<Text>{settings.email}</Text>
							<Text>{settings.password}</Text>
							<Button title='Edit' onPress={() => setIsEdit(true)} />
						</View>
					)
				}
			</View>
		</View >
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
