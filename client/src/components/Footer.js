import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/styles.js';

import { Link } from 'react-router-dom';
import FacebookIcon from "../assets/icons/facebook.svg"
import InstagramIcon from "../assets/icons/instagram.svg"
import TwitterIcon from "../assets/icons/twitter.svg"

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>SHOP</FooterTitle>
          <FooterLinks>
            <li><Link to="#">Men's sneakers</Link></li>
            <li><Link to="#">Women's sneakers</Link></li>
            <li><Link to="#">Kid's sneakers</Link></li>
            <li><Link to="#">Sale items</Link></li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterTitle>ABOUT US</FooterTitle>
          <FooterLinks>
            <li><Link to="#">Our story</Link></li>
            <li><Link to="#">Our team</Link></li>
            <li><Link to="#">Press</Link></li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterTitle>CUSTOMER SERVICE</FooterTitle>
          <FooterLinks>
            <li><Link to="#">Shipping & Delivery</Link></li>
            <li><Link to="#">Returns & Exchanges</Link></li>
            <li><Link to="#">FAQs</Link></li>
            <li><Link to="#">Contact Us</Link></li>
          </FooterLinks>
        </FooterSection>
        <SocialSection>
          <SocialLinks>
            <SocialIconContainer><Link to="#"><img src={FacebookIcon} alt="Facebook" /></Link></SocialIconContainer>
            <SocialIconContainer><Link to="#"><img src={InstagramIcon} alt="Instagram" /></Link></SocialIconContainer>
            <SocialIconContainer><Link to="#"><img src={TwitterIcon} alt="Twitter" /></Link></SocialIconContainer>
          </SocialLinks>
        </SocialSection>
      </FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.nav`
  background-color: #141414;
  min-height: 10vh;
  display: flex;
  align-items: center;
  @media (max-width: 850px) {
  display: flex;
}
`;

const FooterContainer = styled(Container)`
min-height: 20vh;
align-items: flex-start;
padding: 5rem 1rem;
`;

const FooterSection = styled.div`
  flex: 1 1 12rem;
`;

const FooterTitle = styled.h3`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  gap: 5rem;
  li{
    padding: 0 0 1rem 0;
  }
  li a{
    color: grey;
    font-size: 0.8rem;
  }
`;

const SocialSection = styled.div`
  flex: 3 1 30rem;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIconContainer = styled.div`
  height: 30px;
  width: 32px;
  background: #7e7e7e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    height: 24px;
    fill: white;
    }
  }
`;

export default Footer;