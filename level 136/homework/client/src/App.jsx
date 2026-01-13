import Login from "./components/login.jsx";
import Nav from "./components/Nav.jsx";
import Profile from "./components/Profile";
import Protect from "./components/Protect.jsx";
import Register from "./components/Register";
import { Route, Routes } from "react-router";

const App = () => {
  if (!localStorage.getItem("thisUser")) {
    localStorage.setItem("thisUser", null);
  }

  return (
    <main>
      <Nav />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Protect><Profile /></Protect>} />
      </Routes>
    </main>
  )
}

export default App;