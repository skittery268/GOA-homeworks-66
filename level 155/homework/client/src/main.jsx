import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router"
import { PostsProvider } from './context/postsContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PostsProvider>
      <App />
    </PostsProvider>
  </BrowserRouter>
)
