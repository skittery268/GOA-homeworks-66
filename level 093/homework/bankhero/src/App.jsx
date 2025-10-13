// 3) შექმენით ერთი მდგომარეობა სახელად isLightMode რომლის საწყისი მნიშვნელობა იქნება false, შექმენით ერთი ფუნქცია სახელად toggleTheme ამ ფუნქციში უნდა გეწეროთ ისეთი ლოგიკა რომ isLightMode - მდგომარეობის მნიშვნელობა შეცვალოთ, შექმენით ერთი ღილაკი რომელზე დაჭერისას გამოიძახებთ toggleTheme ფუნქციას, თუ isLightMode მნიშვნელობა არის false - ის ტოლი მაშინ საიტის უკანა ფერი გახადეთ შავი, სხვა შემთხვევაში კი თეთრი, მინიშნება (გამოიყენეთ ternary operator, style ატრიბუტი), ამის გარდა კარგად გაიაზრეთ თქვენს მიერ დაწერილი კოდი და ახსენით კომენტარების სახით, შეგიძლიათ მოიძიოთ ინფორმაციაც ამ დავალებასთან დაკავშირებით

import { useState } from "react"

function App() {
	const [isLightMode, setlightMode] = useState(false);

	const toggleTheme = () => {
		setlightMode(!isLightMode)
	}

	return (
		<>
			<div style={{backgroundColor: isLightMode ? "white" : "black", height: "97vh", width: "100%"}}>
				<button onClick={toggleTheme}>Click Here</button>
			</div>
		</>
	)
}

export default App
