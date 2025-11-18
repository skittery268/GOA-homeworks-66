import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import RegisterForm from "./components/RegisterForm";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <main>
      <AuthProvider>
        <LoginForm />
        <RegisterForm />
        <Profile />
      </AuthProvider>
    </main>
  )
}

export default App;

