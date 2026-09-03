import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

type HomeNavigationType = {
    Home: undefined;
};

type NavigationProps = NativeStackScreenProps<HomeNavigationType>

const Info = ({ navigation }: NavigationProps) => {
    return (
            <View>
                <Text>This is home page</Text>
                <Button title="Click Here" onPress={() => navigation.navigate("Home")} />
            </View>
        );
};

export default Info;