import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { AuthProvider } from './context/auth.context.jsx'
import { BrowserRouter } from 'react-router';
import { PostsProvider } from './context/PostsContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <PostsProvider>
                <App />
            </PostsProvider>
        </AuthProvider>
    </BrowserRouter>
)
