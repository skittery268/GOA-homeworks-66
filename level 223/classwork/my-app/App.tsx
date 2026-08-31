import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [testInputValue, setTestInputValue] = useState<string>("");
	
	return (
		<View style={styles.container}>
			<Button title='Add Product' onPress={() => setIsModalVisible(true)} />

			<Modal visible={isModalVisible} animationType='slide' transparent={true}>
				<Text>Add Product</Text>

				<TextInput value={testInputValue} onChangeText={setTestInputValue} placeholder='Enter product name' />
				<TextInput value={testInputValue} onChangeText={setTestInputValue} placeholder='Enter product Description' />

				<Button title='Add' />
				<Button title='Cancel' onPress={() => setIsModalVisible(false)} />
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
