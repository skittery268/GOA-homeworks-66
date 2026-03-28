import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Nav from "./components/Nav";
import Users from "./pages/Users";
import Chat from "./pages/Chat";

const App = () => {
	return (
		<div className="min-h-screen bg-[radial-gradient(circle_at_top,_#dbeafe_0%,_#f8fafc_45%,_#fef9c3_100%)] pb-10 text-slate-800">
			<div className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
				<Nav />

				<main className="mt-6">
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
						<Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
						<Route path="/chat/:userId" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
					</Routes>
				</main>
			</div>
		</div>
	)
}

export default App;