import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Feed from "./pages/Feed";
import EditPost from "./pages/EditPost";

const App = () => {
  return (
    <>
      <Nav />
    
      <main className="main">
        <Routes>
          <Route path="/" element={
            <section className="page-section home-hero">
              <h2 className="home-title">Welcome to Social Media</h2>
              <p className="home-subtitle">Connect with friends, share your thoughts, and discover what's happening around you.</p>
            </section>
          }/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
          <Route path="/editpost" element={<EditPost />} />
        </Routes>
      </main>
    </>
    
  )
};

export default App;