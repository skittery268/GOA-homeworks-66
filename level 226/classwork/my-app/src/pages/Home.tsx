import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

type HomeNavigationType = {
    Info: undefined;
};

type NavigationProps = NativeStackScreenProps<HomeNavigationType>

const Home = ({ navigation }: NavigationProps) => {
    return (
        <View>
            <Text>This is home page</Text>
            <Button title="Click Here" onPress={() => navigation.navigate("Info")} />
        </View>
    );
};

export default Home;