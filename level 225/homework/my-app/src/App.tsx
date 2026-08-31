import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Favorite from './pages/Favorites';
import { MovieProvider } from './context/MovieContext';
import { colors, fontSize } from './styles/theme';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<MovieProvider>
			<NavigationContainer>
				<StatusBar style='dark' />
				<Tab.Navigator
					initialRouteName='Home'
					screenOptions={{
						headerStyle: {
							backgroundColor: colors.surface,
							borderBottomWidth: 1,
							borderBottomColor: colors.border,
						},
						headerShadowVisible: false,
						headerTitleStyle: {
							fontSize: fontSize.lg,
							fontWeight: '600',
							color: colors.text,
						},
						tabBarActiveTintColor: colors.primary,
						tabBarInactiveTintColor: colors.muted,
						tabBarStyle: {
							backgroundColor: colors.surface,
							borderTopColor: colors.border,
						},
						tabBarLabelStyle: {
							fontSize: fontSize.sm,
							fontWeight: '500',
						},
					}}
				>
					<Tab.Screen name='Home' component={Home} />
					<Tab.Screen name='Profile' component={Profile} />
					<Tab.Screen name='Search' component={Search} />
					<Tab.Screen name='Favorite' component={Favorite} />
				</Tab.Navigator>
			</NavigationContainer>
		</MovieProvider>
	);
};
