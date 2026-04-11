import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Chats from "./pages/Chats";
import Chat from "./pages/Chat";
import Users from "./pages/Users";
import User from "./pages/User";

const App = () => {
	return (
		<>
			<Nav />
			<main className="min-h-screen bg-gray-50 text-gray-900">
				<div className="max-w-5xl mx-auto px-4 py-8">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
					<Route path="/chats" element={<ProtectedRoute><Chats /></ProtectedRoute>} />
					<Route path="/chat/:chatId/:userId" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
					<Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
					<Route path="/user/:userId" element={<ProtectedRoute><User /></ProtectedRoute>} />
				</Routes>
				</div>
			</main>
		</>
	)
}

export default App;