import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native"
import { useAuth } from "../../context/AuthContext";
import { colors, formStyles } from "../../styles/common";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [focused, setFocused] = useState<string | null>(null);

    const { login, error } = useAuth();

    return (
        <View style={formStyles.container}>
            <View style={formStyles.form}>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Please enter your email"
                    placeholderTextColor={colors.muted}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    autoCapitalize="none"
                    keyboardType="email-address"
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
                    onPress={() => login(email, password)}
                    style={({ pressed }) => [formStyles.button, pressed && formStyles.buttonPressed]}
                >
                    <Text style={formStyles.buttonText}>Login</Text>
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

export default Login;
