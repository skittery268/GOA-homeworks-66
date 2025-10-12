import Header from "./components/Header";

function App() {
	const isLoggedIn = true;
	return (
		<>
			<Header isLoggedIn={isLoggedIn} />
		</>
	)
}

export default App
