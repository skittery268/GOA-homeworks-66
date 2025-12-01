import { Route, Routes } from "react-router"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Cars from "./pages/Cars"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import SetCars from "./components/home page/SetCars"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"
import OurServices from "./pages/OurServices"
import OurAgents from "./pages/ourAgents"
import Faqs from "./pages/Faqs"
import Pricing from "./pages/Pricing"
import Contacts from "./pages/Contacts"


const App = () => {
  SetCars();
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pages/about-us" element={<AboutUs />} />
        <Route path="/pages/our-services" element={<OurServices />} />
        <Route path="/pages/our-agents" element={<OurAgents />} />
        <Route path="/pages/faqs" element={<Faqs />} />
        <Route path="/pages/pricing" element={<Pricing />} />
        <Route path="/pages/contacts" element={<Contacts />}/>
        <Route path="/cars" element={<Cars />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
