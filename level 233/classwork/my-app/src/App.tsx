import { ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { createCache, getCache, getProductKey } from './storage/utils';
import { cache, useEffect, useState } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';

export interface Product {
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

const api = axios.create({
	baseURL: "https://fakestoreapi.com",
	timeout: 10000
});

axiosRetry(api, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export default function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [isOnline, setIsOnline] = useState<boolean>(true);

	const getProducts = async () => {
		setLoading(true);
		try {
			if (isOnline) {
				try {
					const res = await api.get("products");

					await createCache("products", res.data.slice(0, 11), 30);
					setProducts(res.data);
				} catch (err) {
					const data = await getCache("products");

					setProducts(data ? JSON.parse(data) : []);
				};
			}

			const data = await getCache("products");

			setProducts(data ? JSON.parse(data) : []);
		} catch (err) {
			const data = await getCache("products");

			setProducts(data ? JSON.parse(data) : []);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Button title={isOnline ? "Go offline" : "Go online"} onPress={() => setIsOnline(!isOnline)} />
			<Button title='Fetch products' onPress={getProducts} />
			<Button title='Clear display' onPress={() => setProducts([])} />

			{
				loading ? (
					<ActivityIndicator size={"small"} />
				) : (
					<FlatList
						data={products}
						renderItem={({ item }) => {
							return (
								<View>
									<Text>{item.title}</Text>
									<Text>{item.description}</Text>
									<Image source={{ uri: item.image }} height={200} />
								</View>
							)
						}}
						keyExtractor={(item) => item.id.toString()}
					/>
				)
			}
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
