import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Nav from "./components/Nav";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

const App = () => {
    return (
		<div className="min-h-screen bg-gray-100">
			<Nav />
			<main className="container mx-auto px-4 py-8">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
					<Route path="/posts" element={<ProtectedRoute><Posts /></ProtectedRoute>} />
					<Route path="/post/:postId" element={<ProtectedRoute><Post /></ProtectedRoute>} />
				</Routes>
			</main>
		</div>
	)
}

export default App;