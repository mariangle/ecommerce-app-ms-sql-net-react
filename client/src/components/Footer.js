import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Facebook from "../assets/icons/facebook.svg"
import Instagram from "../assets/icons/instagram.svg"
import Twitter from "../assets/icons/twitter.svg"
import { Container } from '../styles/styles.js';



const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <FooterSection>
          <FooterTitle>SHOP</FooterTitle>
          <FooterLinks>
            <li><Link to="#">Men's sneakers</Link></li>
            <li><Link href="#">Women's sneakers</Link></li>
            <li><Link href="#">Kid's sneakers</Link></li>
            <li><Link href="#">Sale items</Link></li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterTitle>ABOUT US</FooterTitle>
          <FooterLinks>
            <li><Link href="#">Our story</Link></li>
            <li><Link href="#">Our team</Link></li>
            <li><Link href="#">Press</Link></li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterTitle>CUSTOMER SERVICE</FooterTitle>
          <FooterLinks>
            <li><Link href="#">Shipping & Delivery</Link></li>
            <li><Link href="#">Returns & Exchanges</Link></li>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </FooterLinks>
        </FooterSection>
        <SocialSection>
          <SocialLinks>
            <SocialContainer><Link href="#"><img src={Facebook} alt="" /></Link></SocialContainer>
            <SocialContainer><Link href="#"><img src={Instagram} alt="" /></Link></SocialContainer>
            <SocialContainer><Link href="#"><img src={Twitter} alt="" /></Link></SocialContainer>
          </SocialLinks>
        </SocialSection>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.nav`
  background-color: #141414;
  min-height: 10vh;
  display: flex;
  align-items: center;
`;

const StyledFooterContainer = styled(Container)`
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

const SocialContainer = styled.div`
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