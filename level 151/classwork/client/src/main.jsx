import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BrowserRouter>
)
