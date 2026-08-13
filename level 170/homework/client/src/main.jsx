import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { ToastProvider } from './context/ToastContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { GroupsProvider } from './context/GroupsContext.jsx';
import { MessageProvider } from './context/MessageContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ToastProvider>
      <AuthProvider>
        <GroupsProvider>
          <MessageProvider>
            <App />
          </MessageProvider>
        </GroupsProvider>
      </AuthProvider>
    </ToastProvider>
  </BrowserRouter>
)
