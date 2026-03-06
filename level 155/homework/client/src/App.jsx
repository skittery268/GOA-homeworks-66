import { Route, Routes } from "react-router";
import CreatePost from "./pages/CreatePost";
import Nav from "./components/Nav";
import Posts from "./pages/Posts";

const App = () => {
    return (
		<>
			<Nav />

			<Routes>
				<Route path="/addpost" element={<CreatePost />} />
				<Route path="/posts" element={<Posts />} />
			</Routes>
		</>
	)
}

export default App;