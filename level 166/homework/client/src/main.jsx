import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext.jsx';
import { MessagesProvider } from './context/MessagesContext.jsx';
import "./index.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <MessagesProvider>
        <App />
        <ToastContainer />
      </MessagesProvider>
    </AuthProvider>
  </BrowserRouter>,
)
