import { useState } from 'react';
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

interface FormData {
	fullname: string;
	email: string;
	password: string;
	isPressed: boolean;
};

export default function App() {
	const [fullname, setFullname] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isPressed, setIsPressed] = useState<boolean>(false);
	const [formData, setFormData] = useState<FormData>({
		fullname: "",
		email: "",
		password: "",
		isPressed: false
	});;

	const isVisible = Keyboard.isVisible();

	const handleSubmit = () => {
		setFormData({ fullname, email, password, isPressed });
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<Text>Registration</Text>

			<View>
				<TextInput value={fullname} onChangeText={setFullname} placeholder='Full name' style={[{ backgroundColor: isVisible ? "red" : "gray" }, styles.input]} />
				<TextInput value={email} onChangeText={setEmail} placeholder='Email' style={[{ backgroundColor: isVisible ? "red" : "gray" }, styles.input]} />
				<TextInput value={password} onChangeText={setPassword} placeholder='Password' style={[{ backgroundColor: isVisible ? "red" : "gray" }, styles.input]} />
				<Switch value={isPressed} onValueChange={setIsPressed} />

				<Button title='Submit' onPress={handleSubmit} />
			</View>

			<View>
				<Text>{formData.fullname}</Text>
				<Text>{formData.email}</Text>
				<Text>{formData.isPressed ? "True" : "False"}</Text>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10
	},
	input: {
		width: 200
	}
});
