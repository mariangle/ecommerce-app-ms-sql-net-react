import React from 'react';
import hero from "../assets/icons/hero.png"
import { Link } from 'react-router-dom';
import ProductList from '../components/product/ProductList';

function Home() {
  return (
    <>
      <div className='hero'>
        <div className='hero-circle'> </div>
        <img className='hero-img' src={hero} alt="" />
      </div>
      <div className='hero-about'>
        <div>
          <p>Air Jordan 1</p>
          <h3>Grey Blue</h3>
          <p>Exclusive</p>
        <Link to="/shop"><button>SHOP NOW</button></Link> 
        </div>
        </div>  
      <div className='hero-container container'>
        <h2>DISCOUNT</h2>
        <div className="line"></div>
        <h2>JUST ARRIVED</h2>
        <div className="line"></div>
        <h2>SHOP BRAND</h2>
        <ProductList></ProductList>
      </div>
    </>
  );
}

export default Home;