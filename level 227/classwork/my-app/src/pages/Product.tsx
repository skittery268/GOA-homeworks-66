import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamsList } from "../App";
import { ProductInterfase } from "../types/product";
import { products } from "../data/products";
import { Text, View } from "react-native";

type Props = NativeStackScreenProps<RootParamsList, "Product">;

const Product = ({ route }: Props) => {
    const { id } = route.params;

    const product: ProductInterfase | undefined = products.find(p => p.id === id);

    if (!product) {
        return (
            <View>
                <Text>Product not found!</Text>
            </View>
        );
    };

    return (
        <View>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
            <Text>{product.rating}</Text>
        </View>
    );
};

export default Product;