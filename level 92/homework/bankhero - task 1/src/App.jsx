import Parent from "./components/Parent"

function App() {
	const handleClick = () => {
		alert('Button clicked!')
	}
	return (
		<>
			<Parent handleClick={handleClick} />	
		</>
	)
}

export default App
