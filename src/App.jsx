import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import CatalogPage from './pages/CatalogPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import './App.css'

function AppContent() {
  const { cart } = useCart()
  const { theme, toggleTheme } = useTheme()
  const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <NavLink className="logo" to="/">GameGear</NavLink>
        <nav className="navigation">
          <NavLink className={navClass} to="/">Каталог</NavLink>
          <NavLink className={navClass} to="/cart">Корзина ({cart.length})</NavLink>
          <NavLink className={navClass} to="/login">Вход</NavLink>
        </nav>
        <button className="theme-button" onClick={toggleTheme}>
          {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
        </button>
      </header>

      <main className="page">
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
