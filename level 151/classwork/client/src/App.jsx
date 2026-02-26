import { Route, Routes } from "react-router";
import Admin from "./pages/Admin";
import Nav from "./components/Nav";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

const App = () => {
    return (
		<>
			<Nav />

			<Routes>
				<Route path="/admin" element={<Admin />} />
				<Route path="/products" element={<Shop />} />
				<Route path="/product/:id" element={<Product />} />
			</Routes>
		</>
	)
}

export default App;