import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './context/AuthContext.jsx';
import { GroupsProvider } from './context/GroupsContext.jsx';
import { MessageProvider } from './context/MessageContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <GroupsProvider>
        <MessageProvider>
          <App />
        </MessageProvider>
      </GroupsProvider>
    </AuthProvider>
  </BrowserRouter>
)
