import React from 'react';

import { Link } from 'react-router-dom';
import FacebookIcon from "../../assets/icons/facebook.svg"
import InstagramIcon from "../../assets/icons/instagram.svg"
import TwitterIcon from "../../assets/icons/twitter.svg"

const Footer = () => {
  return (
    <div className="footer">
        <div className='footer-section'>
          <h3>SHOP</h3>
          <ul>
            <li><Link to="#">Men's sneakers</Link></li>
            <li><Link to="#">Women's sneakers</Link></li>
            <li><Link to="#">Kid's sneakers</Link></li>
            <li><Link to="#">Sale items</Link></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>ABOUT US</h3>
          <ul>
            <li><Link to="#">Our story</Link></li>
            <li><Link to="#">Our team</Link></li>
            <li><Link to="#">Press</Link></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li><Link to="#">Shipping & Delivery</Link></li>
            <li><Link to="#">Returns & Exchanges</Link></li>
            <li><Link to="#">FAQs</Link></li>
            <li><Link to="#">Contact Us</Link></li>
          </ul>
        </div>
        <div className='footer-socials'>
            <div className='social-icon-container'><Link to="#"><img src={FacebookIcon} alt="Twitter" /></Link></div>
            <div className='social-icon-container'><Link to="#"><img src={InstagramIcon} alt="Instagram" />
            </Link></div>
            <div className='social-icon-container'><Link to="#"><img src={TwitterIcon} alt="Twitter" /></Link></div>
        </div>
    </div>
  );
};

export default Footer;