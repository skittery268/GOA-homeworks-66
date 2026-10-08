import { useState } from "react";
import { Button, TextInput, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Form = () => {
    const insets = useSafeAreaInsets();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <View style={{ 
            paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            paddingBottom: insets.bottom
        }}>
            <View>
                <TextInput value={name} onChangeText={setName} placeholder="Enter your name" />
                <TextInput value={email} onChangeText={setEmail} placeholder="Enter your email" />
                <TextInput value={password} onChangeText={setPassword} placeholder="Enter your password" />

                <Button title="Submit" onPress={() => console.log("Form submited!")} />
            </View>
        </View>
    );
};

export default Form;