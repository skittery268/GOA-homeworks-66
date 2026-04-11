import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router"
import { AuthProvider } from './context/AuthContext.jsx'
import { ChatProvider } from './context/ChatContext.jsx'
import { MessageProvider } from './context/MessageContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import "./main.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ChatProvider>
        <MessageProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </MessageProvider>
      </ChatProvider>
    </AuthProvider>
  </BrowserRouter>
)
