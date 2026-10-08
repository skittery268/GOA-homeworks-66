import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number
	}
}

export default function App() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const getProducts = async () => {
			const res = await fetch("https://fakestoreapi.com/products");

			if (!res.ok) {
				throw new Error("Failed to fetch!");
			};

			await AsyncStorage.setItem("products", JSON.stringify(res));
		};

		getProducts();
	}, []);

	const getFromAsyncStorage = async () => {
		const data = await AsyncStorage.getItem("products")

		setProducts(data ? JSON.parse(data) : []);
	};

	return (
		<View style={styles.container}>
			<Button title='Get products' onPress={getFromAsyncStorage} />

			<FlatList
				data={products}
				renderItem={({ item }) => {
					return (
						<View>
							<Text>{item.title}</Text>
							<Text>{item.description}</Text>
							<Text>{item.price}</Text>
						</View>
					)
				}}
				keyExtractor={(item) => item.id.toString()}
			/>
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
