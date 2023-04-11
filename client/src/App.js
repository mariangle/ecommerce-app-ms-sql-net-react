// import components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import pages
import Home from "./pages/Home";
import Shop from './pages/Shop';
import ProductPage from './pages/ProductDetail';
import CartPage from "./pages/Cart"
import CheckoutPage from './pages/Checkout';
import Admin from "./pages/AdminPanel"
import Account from './pages/Account';

import { Routes, Route, useLocation } from 'react-router-dom';
import Authentication from './pages/Authentication';
import './styles/main.scss';
import { useEffect } from 'react';
import { useCart } from './utils/hooks/useCart';


function App() {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/checkout';

  const { clearCart, addToCart } = useCart();

  useEffect(() => {
    const loadCartItems = async () => {
      const cartItems = localStorage.getItem('cartItems');
      if (cartItems) {
        const parsedItems = JSON.parse(cartItems);
        clearCart();
        parsedItems.forEach(item => addToCart(item));
      }
    };
    loadCartItems();
  }, []);
  
  return (
    <>
      {showHeaderFooter && <Header/>}
      <Routes>
        <Route path="/" element={<Home location={location} />} />
        <Route path="/:id" element={<ProductPage />} /> 
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;