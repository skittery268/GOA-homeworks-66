import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PostsScreen from './pages/PostsScreen';
import PostDetailsScreen from './pages/PostDetailsScreen';
import CreatePostScreen from './pages/CreatePostScreen';
import EditPostScreen from './pages/EditPostScreen';
import { PostsProvider } from './context/PostsContext';
import { colors, font } from './theme';

export type RootStackParamList = {
	PostsScreen: undefined;
	PostDetailsScreen: {
		id: number;
	};
	CreatePostScreen: undefined;
	EditPostScreen: {
		id: number;
	};
};

const Tab = createNativeBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const PostStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: colors.surface },
				headerTitleStyle: { color: colors.text, fontSize: font.lg, fontWeight: '600' },
				headerTintColor: colors.primary,
				headerShadowVisible: false,
				contentStyle: { backgroundColor: colors.background }
			}}
		>
			<Stack.Screen name='PostsScreen' component={PostsScreen} options={{ title: "Posts" }} />
			<Stack.Screen name='PostDetailsScreen' component={PostDetailsScreen} options={{ title: "Post" }} />
			<Stack.Screen name='CreatePostScreen' component={CreatePostScreen} options={{ title: "Create Post" }} />
			<Stack.Screen name='EditPostScreen' component={EditPostScreen} options={{ title: "Edit Post" }} />
		</Stack.Navigator>
	)
}

export default function App() {
	return (
		<PostsProvider>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name='Home' component={Home} />
					<Tab.Screen name='Posts' component={PostStackNavigator} />
					<Tab.Screen name='Profile' component={Profile} />
				</Tab.Navigator>
			</NavigationContainer>
		</PostsProvider>
	);
};
