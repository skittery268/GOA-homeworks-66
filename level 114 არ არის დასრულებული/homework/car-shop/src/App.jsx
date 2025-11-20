import { Route, Routes } from "react-router"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Pages from "./pages/Pages"
import Cars from "./pages/Cars"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
