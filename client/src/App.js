import GlobalStyles from './styles/GlobalStyles';
// import components
import Header from './components/Header';
import Home from "./pages/Home";
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetail />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;