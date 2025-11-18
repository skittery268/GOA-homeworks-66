import { useMemo, useState } from "react";

const App = () => {
	const [number, setNumber] = useState(3000);
	const [text, setText] = useState("");

  	const calculateFibonacci = (n) => {
		if (n < 0) return null;
		if (n === 0) return 0;
		if (n === 1) return 1;

		let a = 0, b = 1;

		for (let i = 2; i <= n; i++) {
			const next = a + b;
			a = b;
			b = next;
		}

		return b
  	}

	const handleChange = (e) => {
		const { name, value } = e.target

		if (name === "number") {
			setNumber(value)
		} else {
			setText(value);
		}
	}

	const fibValue = useMemo(() => calculateFibonacci(number), [number]);

  	return (
		<>
			<input type="number" onChange={(e) => handleChange(e)} name="number" />
			<p>Number: {number}</p>
			<p>Number Fibonacci: {fibValue}</p>
			<br />
			<br />
			<br />
			<input type="text" onChange={(e) => handleChange(e)} name="text" />
			<p>Text: {text}</p>
		</>
  	)
}

export default App;

