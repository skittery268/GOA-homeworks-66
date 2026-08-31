import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName='Home'>
				<Tab.Screen name='Home' component={Home} />
				<Tab.Screen name='Contact' component={Contact} />
				<Tab.Screen name='About' component={About} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

