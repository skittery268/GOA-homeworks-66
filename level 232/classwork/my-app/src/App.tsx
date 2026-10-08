import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getProductKey } from './storage/utils';
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
	};
};

export default function App() {
	const [products, setProducts] = useState<Product[]>([]);

	const getProducts = async () => {
		try {
			const res = await fetch("https://fakestoreapi.com/products");

			const data = await res.json();

			if (!res.ok) {
				throw new Error("Something went wrong!");
			};

			await AsyncStorage.setItem(getProductKey("all"), JSON.stringify(data));
			setProducts(data);
		} catch (err) {
			const data = await AsyncStorage.getItem(getProductKey("all"))

			setProducts(data ? JSON.parse(data) : []); 
		};
	};

	useEffect(() => {
		getProducts();
	}, []);
	
	return (
		<View style={styles.container}>
			<FlatList 
				data={products}
				renderItem={({ item }) => {
					return <View>
						<Text>{item.title}</Text>
					</View>
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
