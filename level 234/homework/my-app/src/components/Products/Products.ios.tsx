import { Button, FlatList, Text, View } from "react-native"
import { useProduct } from "../../context/ProductsContext"
import { router } from "expo-router";

export const Products = () => {
    const { products, deleteProduct } = useProduct();

    return (
        <View>
            <FlatList 
                data={products}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                            <Button title="Delete Product" onPress={() => deleteProduct(item.id)} />
                            <Button title="View More" onPress={() => router.push(`/${item.id}`)} />
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};