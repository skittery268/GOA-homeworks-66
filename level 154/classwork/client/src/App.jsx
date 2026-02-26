import { Route, Routes } from "react-router";
import Admin from "./pages/Admin";
import Nav from "./components/Nav";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
		<>
			<Nav />

			<Routes>
				<Route path="/admin" element={<Admin />} />
				<Route path="/products" element={<Shop />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
			</Routes>
		</>
	)
}

export default App;