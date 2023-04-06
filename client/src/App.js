import GlobalStyles from './styles/GlobalStyles';
// import components
import Header from './components/Header';
import Home from "./pages/HomePage";
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CartPage from "./pages/Cart"
import CheckoutPage from './pages/Checkout';
import AdminPage from "./pages/AdminPanel"
import Profile from './pages/Profile';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Authentication from './pages/Authentication';
import './styles/style.scss';


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
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </Provider>
    </>
  );
}

export default App;