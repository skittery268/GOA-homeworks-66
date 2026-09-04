import { FlatList, Pressable, Text, View } from "react-native";
import { products } from "../data/products";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamsList } from "../App";

type Props = NativeStackScreenProps<RootParamsList, "Shop">;

const Shop = ({ navigation }: Props) => {
    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name} - {item.price}</Text>
                            <Pressable onPress={() => navigation.navigate("Product", { id: item.id })}>
                                <Text>Details</Text>
                            </Pressable>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Shop;
