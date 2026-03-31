import { Route, Routes } from "react-router";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./components/Nav";

const App = () => {
	return (
		<>
			<Nav />

			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/messages" element={<Messages />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	)
}

export default App;