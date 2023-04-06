import GlobalStyles from './styles/GlobalStyles';
// import components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import pages
import Home from "./pages/Home";
import Shop from './pages/Shop';
import ProductPage from './pages/ProductDetail';
import CartPage from "./pages/Cart"
import CheckoutPage from './pages/Checkout';
import AdminPage from "./pages/AdminDashboard"
import Profile from './pages/Profile';

import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Authentication from './pages/Authentication';
import './styles/main.scss';


function App() {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/checkout';
  
  return (
    <>
    <Provider store={store}>
    <GlobalStyles />
      {showHeaderFooter && <Header></Header>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductPage />} /> 
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </Provider>
    </>
  );
}

export default App;