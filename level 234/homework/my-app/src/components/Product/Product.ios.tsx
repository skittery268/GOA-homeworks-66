import { Button, Text, View } from "react-native"
import { useProduct } from "../../context/ProductsContext";
import { router, useLocalSearchParams } from "expo-router";

const Product = () => {
    const { products, deleteProduct } = useProduct();
    const { id }: { id: string } = useLocalSearchParams();
    
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        throw new Error("Product not found!");
    }

    return (
        <View>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
            <Text>{product.stock}</Text>

            <Button title="Delete Product" onPress={() => { deleteProduct(product.id); router.back() }} />
        </View>
    );
};

export default Product;