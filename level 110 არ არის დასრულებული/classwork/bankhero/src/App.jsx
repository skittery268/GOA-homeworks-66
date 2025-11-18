import { Route, Routes } from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Nav from "./components/UI/Nav"
import Profile from "./pages/Profile"

function App() {
	return (
		<>
			<Nav />

			<Routes>
				<Route path="/" element={<p>Home</p>} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	)
}

export default App
