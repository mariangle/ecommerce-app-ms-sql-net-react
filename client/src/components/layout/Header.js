import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../assets/icons/icons';
import { useLocation } from 'react-router-dom';
import { useCart } from '../../utils/hooks/useCart';

function Header() {
  const location = useLocation();
  const { quantity } = useCart();

  const isHomePage = location.pathname === '/';

  return (
    <nav>
      <div className='header-second'>
        <div className="header-second-msg">
          <p><span>SECURE</span> PAYMENT THROUGH PAYPAL</p>
          <p><span>FREE</span> SHIPPING ON ORDER OVER $100</p>
          <p><span>100%</span> AUTHENTIC</p>
        </div>
      </div>
      <div className={`header-container ${isHomePage ? 'home' : ''}`}>
        <Link className="header-main" to="/"><h1>STORE</h1></Link>
        <ul>
        <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/">CONTACT US</Link></li>
          <li><Link to="/">ABOUT US</Link></li>
        </ul>
        <div className='header-tools'>
          <Link to="/">
            <div className="svg-icon">
              <FontAwesomeIcon icon={icons.search}/>
            </div>
          </Link>
          <Link to="/account">
            <div className="svg-icon">
              <FontAwesomeIcon icon={icons.user}/>
            </div>
          </Link>   
          <Link to="/admin">
            <div className="svg-icon">
              <FontAwesomeIcon icon={icons.heart} />
            </div>
          </Link>    
          <Link to="/cart">
              <div className='svg-icon'>
                <FontAwesomeIcon icon={icons.cart}/>
                {quantity > 0 && <span>{quantity > 9 ? "9+": quantity } </span>
}
              </div>
          </Link>
          <div className='burger'><FontAwesomeIcon icon={icons.hamburger} /></div>
        </div>
      </div>
    </nav>
  );
}

export default Header