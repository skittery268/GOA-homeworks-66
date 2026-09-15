import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native"
import { useAuth } from "../../context/AuthContext";
import { colors, formStyles } from "../../styles/common";

const Register = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [focused, setFocused] = useState<string | null>(null);

    const { register, error } = useAuth();

    return (
        <View style={formStyles.container}>
            <View style={formStyles.form}>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Please enter your name"
                    placeholderTextColor={colors.muted}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={[formStyles.input, focused === "name" && formStyles.inputFocused]}
                />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Please enter your email"
                    placeholderTextColor={colors.muted}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={[formStyles.input, focused === "email" && formStyles.inputFocused]}
                />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Please enter your password"
                    placeholderTextColor={colors.muted}
                    onFocus={() => setFocused("password")}
                    onBlur={() => setFocused(null)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={[formStyles.input, focused === "password" && formStyles.inputFocused]}
                />

                <Pressable
                    onPress={() => register(name, email, password)}
                    style={({ pressed }) => [formStyles.button, pressed && formStyles.buttonPressed]}
                >
                    <Text style={formStyles.buttonText}>Register</Text>
                </Pressable>

                {
                    error && (
                        <View style={formStyles.error}>
                            <Text style={formStyles.errorText}>{error}</Text>
                        </View>
                    )
                }
            </View>
        </View>
    );
};

export default Register;
