import { StyleSheet, Text, View } from "react-native"
import { useAuth } from "../../context/AuthContext";
import { Redirect } from "expo-router";
import { colors } from "../../styles/common";

const Profile = () => {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href={"(auth)/login"} />;
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    card: {
        width: "100%",
        maxWidth: 420,
        alignSelf: "center",
        gap: 4,
        padding: 24,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
    },
    name: {
        fontSize: 20,
        fontWeight: "600",
        color: colors.text,
    },
    email: {
        fontSize: 15,
        color: colors.muted,
    },
});

export default Profile;
