import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

export type RootStackParamList = {
	Home: undefined;
	Details: {
		id: number
	}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerStyle: { backgroundColor: '#ffffff' },
					headerTintColor: '#18181b',
					headerTitleStyle: { fontSize: 17, fontWeight: '600' },
					headerShadowVisible: false,
					contentStyle: { backgroundColor: '#f4f4f5' },
				}}
			>
				<Stack.Screen name='Home' component={Home} options={{ title: 'Products' }} />
				<Stack.Screen name='Details' component={ProductDetails} options={{ title: 'Details' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
