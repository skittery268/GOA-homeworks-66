import { Button, FlatList, Text, View } from "react-native"
import { useProduct } from "../../context/ProductsContext"

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
                            <Text>{item.description}</Text>
                            <Text>{item.price}</Text>
                            <Text>{item.stock}</Text>
                            <Button title="Delete Product" onPress={() => deleteProduct(item.id)} />
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};