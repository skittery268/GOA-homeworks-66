import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Info } from "@/types/Info";

const App = () => {
    const [formData, setFormData] = useState<Info>({
        userFirstName: "",
        userLastName: "",
        age: "",
        favoriteProgrammingLanguage: ""
    });
    const [userInfo, setUserInfo] = useState<Info>({
        userFirstName: "",
        userLastName: "",
        age: "",
        favoriteProgrammingLanguage: ""
    });

    const handleChange = (key: string, text: string) => {
        setFormData((prev) => ({
            ...prev,
            [key]: text
        }));
    };

    const handleSubmit = () => {
        if (!formData.userFirstName) return;
        if (!formData.userLastName) return;
        if (!formData.age) return;
        if (!formData.favoriteProgrammingLanguage) return;

        setUserInfo(formData)
        setFormData({
            userFirstName: "",
            userLastName: "",
            age: "",
            favoriteProgrammingLanguage: ""
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View>
                    <Text>Please enter your first name</Text>
                    <TextInput value={formData.userFirstName} onChangeText={(text) => handleChange("userFirstName", text)} style={styles.input} />
                </View>
                <View>
                    <Text>Please enter your last name</Text>
                    <TextInput value={formData.userLastName} onChangeText={(text) => handleChange("userLastName", text)} style={styles.input} />
                </View>
                <View>
                    <Text>Please enter your age</Text>
                    <TextInput value={formData.age} onChangeText={(text) => handleChange("age", text)} style={styles.input} />
                </View>
                <View>
                    <Text>Please enter your favorite </Text>
                    <Text>programming language</Text>
                    <TextInput value={formData.favoriteProgrammingLanguage} onChangeText={(text) => handleChange("favoriteProgrammingLanguage", text)} style={styles.input} />
                </View>

                <Button title="Submit" onPress={handleSubmit} />
            </View>

            {
                userInfo.userFirstName && (
                    <View>
                        <Text>User first name: {userInfo.userFirstName}</Text>
                        <Text>User last name: {userInfo.userLastName}</Text>
                        <Text>User age: {userInfo.age}</Text>
                        <Text>User favorite programming language: {userInfo.favoriteProgrammingLanguage}</Text>
                    </View>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: 500,
        marginTop: 100
    },
    input: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 5,
        width: 200,
        paddingHorizontal: 15
    }
})

export default App;