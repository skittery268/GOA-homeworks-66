import { StyleSheet, Text, View, Platform } from 'react-native';
import Card from "./components/card/Card";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={{ backgroundColor: Platform.OS === "ios" ? "red" : "green" }}>This is Platform.OS property example</Text>

			<Card />
		</View>
	);
}

const styles = StyleSheet.create({
	container: Platform.select({
		ios: {
			flex: 1,
			justifyContent: "flex-start",
			backgroundColor: "red",
			padding: 10
		},
		android: {
			flex: 1,
			justifyContent: "flex-end",
			backgroundColor: "aqua",
			padding: 5
		},
		default: {
			flex: 1,
			justifyContent: 'center',
			backgroundColor: '#ecf0f1',
			padding: 8,
		}
	})
});
