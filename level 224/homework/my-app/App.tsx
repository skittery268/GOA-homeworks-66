import { useState } from 'react';
import { ActivityIndicator, FlatList, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	stock: number;
}

export default function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [price, setPrice] = useState<number>(0);
	const [stock, setStock] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(false);
	const [deletedProductId, setDeletedProductId] = useState<number | null>(null);

	const handleAddProduct = () => {
		const newProduct: Product = {
			id: Date.now(),
			name,
			description,
			price,
			stock,
		};

		setProducts(prev => [...prev, newProduct]);
		setName('');
		setDescription('');
		setPrice(0);
		setStock(0);
	};

	const handleDeleteProduct = (id: number) => {
		try {
			setLoading(true);
			setDeletedProductId(id);
			setTimeout(() => {
				setProducts(prev => prev.filter(product => product.id !== id));
			}, 1000);
		} catch (error) {
			console.log('Error deleting product:', error);
		} finally {
			setLoading(false);
			setDeletedProductId(null);
		}
	};

	return (
		<View style={styles.container}>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<TextInput value={name} onChangeText={setName} />
				<TextInput value={description} onChangeText={setDescription} />
				<TextInput value={price.toString()} onChangeText={(text) => setPrice(Number(text))} />
				<TextInput value={stock.toString()} onChangeText={(text) => setStock(Number(text))} />

				<Pressable onPress={handleAddProduct}>
					<Text>Add Product</Text>
				</Pressable>
			</KeyboardAvoidingView>

			<View>
				<FlatList
					data={products}
					renderItem={({ item }) => {
						return (
							(deletedProductId === item.id && loading) ? (
								<ActivityIndicator size={"small"} />
							) : (
								<View>
									<Text>{item.name}</Text>
									<Text>{item.description}</Text>
									<Text>{item.price}</Text>
									<Text>{item.stock}</Text>
									<Pressable onPress={() => handleDeleteProduct(item.id)}>
										<Text>Delete Product</Text>
									</Pressable>
								</View>
							)
						)
					}}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
