import GlobalStyles from './styles/GlobalStyles';
// import components
import Header from './components/Header';
import Home from "./pages/HomePage";
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CartPage from "./pages/CartPage"
import CheckoutPage from './pages/CheckoutPage';

import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();
  

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }
  const showHeaderFooter = location.pathname !== '/checkout';

  return (
    <>
    <Provider store={store}>
    <GlobalStyles />
      {showHeaderFooter && <Header key={cart.length} cart={cart}></Header>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductPage addToCart={addToCart} />} /> 
        <Route path="/cart" element={<CartPage cart={cart}/>} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </Provider>
    </>
  );
}

export default App;