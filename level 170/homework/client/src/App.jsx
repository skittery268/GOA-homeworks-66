import { Link, Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Toaster from "./components/Toaster";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
import Group from "./pages/Group";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";

const NotFound = () => (
	<div className="page empty-state">
		<h1>404</h1>
		<p>This page does not exist.</p>
		<Link className="btn btn-primary" to="/">Go home</Link>
	</div>
)

const App = () => {
	return (
		<div className="app">
			<Nav />

			<main className="app-main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
					<Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />
					<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
					<Route path="/groups" element={<ProtectedRoute><Groups /></ProtectedRoute>} />
					<Route path="/group/:groupId" element={<ProtectedRoute><Group /></ProtectedRoute>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>

			<Toaster />
		</div>
	)
}

export default App;
