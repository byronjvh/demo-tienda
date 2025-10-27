import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Product from './pages/Product.jsx'
import Header from './components/Header.jsx'
import {Tiendas} from './pages/Tiendas.jsx'
import { FloatingChatbot } from './components/chat/FloatingChat.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:sku" element={<Product />} />
      <Route path="/tiendas" element={<Tiendas />} />
    </Routes>
    <FloatingChatbot />
  </BrowserRouter>
)
