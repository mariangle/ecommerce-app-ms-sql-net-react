import GlobalStyles from './styles/GlobalStyles';
// import components
import Header from './components/Header';
import Home from "./pages/HomePage";
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CartPage from "./pages/CartPage"
import { useState, useEffect } from 'react';


import { Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <>
      <GlobalStyles />
      <Header key={cart.length} cart={cart}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;