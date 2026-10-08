// react-native-safe-area-context - გვეხმარება იმაში, რომ ჩვენ გამოვიტანოთ ჩვენი UI უსაფრთხო ზონაში
// უსაფრთხო ზონად იგულისხმება ადგილი სადაც არ არის სისტემური UI (მაგ: ზედა მარცხენა 
// კუთხეში რომ არის დრო, მარჯვნივ რომ არის ინტერნეტის icon-ი, ბატარია და ა.შ)

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import { AppState, FlatList, Text, View } from 'react-native';

interface Log {
	id: number;
	state: string;
	time: string;
};

export default function App() {
	const [appState, setAppState] = useState(AppState.currentState);
	const [logs, setLogs] = useState<Log[]>([]);

	useEffect(() => {
		const subscription = AppState.addEventListener("change", setAppState);

		const thisDate = new Date();

		setLogs(prev => [...prev, { id: Date.now(), state: appState, time: `${thisDate.getHours()}:${thisDate.getMinutes()}:${thisDate.getSeconds()}` }]);

		return () => subscription.remove();
	}, []);

	return (
		<SafeAreaProvider>
			{/* 			
			<SafeAreaView>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
			</SafeAreaView>
		 	*/}
			<SafeAreaView>
				<FlatList
					data={logs}
					renderItem={({ item }) => {
						return (
							<View>
								<Text>State: {item.state} ({item.time})</Text>
							</View>
						)
					}}
					keyExtractor={(item) => item.id.toString()}
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
