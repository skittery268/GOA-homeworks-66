import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
import Group from "./pages/Group";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
	
	return (
		<>
			<Nav />

			<Routes>
				<Route path="/" element={<h1>Home Page</h1>} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
				<Route path="/groups" element={<ProtectedRoute><Groups /></ProtectedRoute>} />
				<Route path="/group/:groupId" element={<ProtectedRoute><Group /></ProtectedRoute>} />
			</Routes>
		</>
	)
}

export default App;