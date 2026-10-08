import { View, StyleSheet, Text } from "react-native";

const Card = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>This is test card heading</Text>

            <Text style={styles.paragraph}>This is test card paragraph</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink"
    },
    heading: {
        fontSize: 15
    },
    paragraph: {
        fontSize: 8
    }
});

export default Card;