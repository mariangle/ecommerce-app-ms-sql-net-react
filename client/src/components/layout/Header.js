import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../assets/icons/icons';

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNav = () => {
    user? navigate("/profile") : navigate("/authentication")
  } 

  return (
      <div className='header-container'>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/">Nike</Link></li>
          <li><Link to="/">Adidas</Link></li>
        </ul>
        <Link className="header-main" to="/"><h1>STORE</h1></Link>
        <div className='header-tools'>
          <FontAwesomeIcon icon={icons.search}/>
          <a onClick={handleNav}><FontAwesomeIcon icon={icons.user}/></a>      
          <Link to="/favorites"><FontAwesomeIcon icon={icons.heart} /></Link>    
          <Link to="/cart">
              <div className='cart-icon'>
                <FontAwesomeIcon icon={icons.cart}/>
                <span>{cartItemCount > 9 ? "9+": cartItemCount } </span>
              </div>
          </Link>
          <div className='burger'>≡</div>
        </div>
      </div>
  );
}

export default Header