import { Route, Routes } from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Nav from "./components/UI/Nav"
import Profile from "./pages/Profile"
import Protect from "./components/Protect"
import Posts from "./pages/Posts"

function App() {
	return (
		<>
			<Nav />

			<Routes>
				<Route path="/" element={<p>Home</p>} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Protect><Profile /></Protect>} />
				<Route path="/posts" element={<Protect><Posts /></Protect>} />
			</Routes>
		</>
	)
}

export default App
