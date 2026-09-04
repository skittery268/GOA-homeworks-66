import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Product from './pages/Product';

export type RootParamsList = {
	Shop: undefined;
	Product: {
		id: number
	};
};

const Stack = createNativeStackNavigator<RootParamsList>();
const Tab = createNativeBottomTabNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='Shop'>
			<Stack.Screen name='Shop' component={Shop} />
			<Stack.Screen name='Product' component={Product} />
		</Stack.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName='Home'>
				<Tab.Screen name='Home' component={Home} />
				<Tab.Screen name='About' component={About} />
				<Tab.Screen name='Shop' component={StackNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};
