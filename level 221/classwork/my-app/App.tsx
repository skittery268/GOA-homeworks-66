import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.children}>
        <Text>1</Text>
      </View>
      <View style={styles.children}>
        <Text>2</Text>
      </View>
      <View style={styles.children}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column-reverse",
    gap: 5
  },
  children: {
    flex: 1,
    backgroundColor: "red",
    height: 200,
    width: 200
  }
});
