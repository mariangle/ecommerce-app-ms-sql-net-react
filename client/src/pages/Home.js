import React from 'react';
import hero from "../assets/icons/hero.png"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='hero'>
        <div className='hero-circle'> </div>
        <img className='hero-img' src={hero} alt="" />
      </div>
      <div className='hero-about'>
        <div>
          <p>Exclusive</p>
          <h3>SUMMER DISCOUNT</h3>
          <p>10% OFF WITH OFF10</p>
        <Link to="/shop"><button>SHOP NOW</button></Link>
        </div>
        </div>  
      <div className='hero-container container'>
        <h2>JUST ARRIVED</h2>
        <h2>SHOP BRAND</h2>
      </div>
    </>
  );
}

export default Home;