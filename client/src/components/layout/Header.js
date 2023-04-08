import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../assets/icons/icons';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNav = () => {
    user? navigate("/account") : navigate("/authentication")
  } 

  return (
    <div className={`header-container ${isHomePage ? 'home' : ''}`}>
        <Link className="header-main" to="/"><h1>STORE</h1></Link>
        <ul>
        <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/">BLOG</Link></li>
          <li><Link to="/">CONTACT US</Link></li>
          <li><Link to="/">ABOUT US</Link></li>
        </ul>
        <div className='header-tools'>
          <Link to="/"><FontAwesomeIcon icon={icons.search}/></Link>
          <a onClick={handleNav}><FontAwesomeIcon icon={icons.user}/></a>      
          <Link to="/admin"><FontAwesomeIcon icon={icons.heart} /></Link>    
          <Link to="/cart">
              <div className='cart-icon'>
                <FontAwesomeIcon icon={icons.cart}/>
                <span>{cartItemCount > 9 ? "9+": cartItemCount } </span>
              </div>
          </Link>
          <div className='burger'><FontAwesomeIcon icon={icons.hamburger} /></div>
        </div>
      </div>
  );
}

export default Header