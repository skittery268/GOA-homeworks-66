// React + React Native
import { useState } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

// Axios
import axios from 'axios';
import axiosRetry from 'axios-retry';

// Async Storgae
import AsyncStorage from '@react-native-async-storage/async-storage';

// Utils
import { getProductsKey } from './storage/utils';

// Create API to simple sent request using axios
const API = axios.create({
	baseURL: "https://fakestoreapi.com",
	// Without a timeout a dead connection hangs forever and retries never fire
	timeout: 10000,
	// Android's networking layer decompresses gzip and nothing else. Left alone the request
	// advertises zstd, the server obliges, and raw compressed bytes arrive instead of JSON.
	// 'identity' asks for no compression at all, so there is nothing left to decode.
	headers: { 'Accept-Encoding': 'identity' }
});

// axios-retry to send request again after failure
axiosRetry(API, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

// How many products we keep on the device
const CACHE_LIMIT = 10;

// Create interface for product
interface Product {
	id: number,
	title: string,
	price: number,
	description: string,
	category: string,
	image: string
};

// Error messages
const ERROR_MESSAGES: Record<number, string> = {
	404: "Products could not be found",
	429: "Too many requests, please wait a moment",
	500: "The store is having trouble, please try again"
};

// A lost connection has no status at all, so it needs its own message
const NETWORK_ERROR = "Please check your WI-FI and try again";

// A 200 carrying a body we cannot read is still a failure, so it needs its own message
const UNREADABLE_ERROR = "The store sent a response we could not read";

class UnreadableResponseError extends Error {};

const getErrorMessage = (err: unknown) => {
	if (err instanceof UnreadableResponseError) return UNREADABLE_ERROR;
	if (axios.isAxiosError(err)) {
		if (!err.response) return NETWORK_ERROR;
		return ERROR_MESSAGES[err.response.status] ?? "Something went wrong";
	}
	return "Something went wrong";
};

// The cache holds whatever an earlier run wrote, so it is checked like any other input
const readCachedProducts = async (): Promise<Product[]> => {
	try {
		const cached = await AsyncStorage.getItem(getProductsKey("all"));
		const parsed = cached ? JSON.parse(cached) : null;
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
};

export default function App() {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [products, setProducts] = useState<Product[]>([]);
	const [fromCache, setFromCache] = useState<boolean>(false);

	// This functin will send request to API using axios and store returned data to ASYNCDB
	const getProducts = async () => {
		// Set loading state true when req starts
		setLoading(true);
		// Set to null (resseting state)
		setError(null);
		setFromCache(false);

		try {
			// 1) Sent request to API
			const result = await API.get('/products');

			// A body the platform failed to decompress arrives as a string. Spreading it would
			// turn one response into thousands of single characters, so refuse it outright.
			if (!Array.isArray(result.data)) {
				// Naming the encoding turns "it broke again" into a five second diagnosis
				console.warn('[products] unreadable body', {
					encoding: result.headers['content-encoding'],
					type: typeof result.data
				});
				throw new UnreadableResponseError();
			}

			// 2) Store all products in state
			setProducts(result.data);

			// 3) Store first 10 product in asyncStorage
			await AsyncStorage.setItem(getProductsKey("all"), JSON.stringify(result.data.slice(0, CACHE_LIMIT)));
		} catch (err) {
			// Get erropr message form client friendly errors
			const errorMessage = getErrorMessage(err);

			// All 3 retries failed, so fall back to the products we saved last time
			const cachedProducts = await readCachedProducts();

			if (cachedProducts.length > 0) {
				setProducts(cachedProducts);
				setFromCache(true);
				setError(`${errorMessage}. Showing the last ${CACHE_LIMIT} saved products.`);
			} else {
				setProducts([]);
				setError(`${errorMessage}. No saved products available.`);
			}

			// Alert user about error (alert takes a title AND a message)
			Alert.alert("Error", errorMessage);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.screen}>
			<Button title='fetch products' onPress={getProducts} disabled={loading} />

			{loading && <ActivityIndicator style={styles.spinner} />}

			{error && <Text style={styles.error}>{error}</Text>}

			{fromCache && <Text style={styles.cache}>Offline copy</Text>}

			<FlatList
				data={products}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => (
					<View style={styles.row}>
						<Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
						<View style={styles.info}>
							<Text numberOfLines={2}>{item.title}</Text>
							<Text style={styles.price}>${item.price}</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: { flex: 1, paddingTop: 60, paddingHorizontal: 16 },
	spinner: { marginTop: 12 },
	error: { marginTop: 12, color: '#b91c1c' },
	cache: { marginTop: 8, color: '#92400e' },
	row: { flexDirection: 'row', gap: 12, paddingVertical: 12 },
	image: { width: 50, height: 50 },
	info: { flex: 1, justifyContent: 'center' },
	price: { fontWeight: '700', marginTop: 4 }
});