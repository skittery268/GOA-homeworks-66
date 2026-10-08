import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import fetchRetry from "fetch-retry";

export default function App() {
	const [products, setProducts] = useState()

	// const fetchWithRetry = async (url: string, retries = 3) => {
	// 	for (let i = 0; i < retries; i++) {
	// 		try {
	// 			const response = await fetch(url);
	// 			if (response.ok) return response;
	// 		} catch (err) {
	// 			if (i === retries - 1) throw err;
	// 			await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
	// 		};
	// 	};
	// };

	const myFetch = fetchRetry(fetch);

	const getProducts = async () => {
		const res = await myFetch("https://fakestoreapi.com/products", { retries: 3, retryDelay: 2000 });

		const data = await res?.json();

		setProducts(data);
	};

	return (
		<View style={styles.container}>
			<Button title='Get products' onPress={getProducts} />

			<View style={{ height: 300 }}>
				<FlatList
					data={products}
					renderItem={({ item }) => {
						return (
							<View>
								<Text>{item?.title}</Text>
								<Text>{item?.description}</Text>
								<Text>{item?.category}</Text>
							</View>
						)
					}}
					keyExtractor={(item) => item?.id.toString()}
				/>
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
	},
});

