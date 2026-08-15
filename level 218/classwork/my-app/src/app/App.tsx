import { useState } from "react";
import { Button, Text } from "react-native";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Text>Count: {count}</Text>
            <Button title="+1" onPress={() => setCount(prev => prev + 1)} />
        </>
    );
};

export default App;