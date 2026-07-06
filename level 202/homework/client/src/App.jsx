import { Route, Routes } from "react-router";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Nav from "./components/Nav";

const App = () => {
	return (
		<>
			<Nav />

			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	)
}

export default App;