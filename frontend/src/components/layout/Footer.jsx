import React from "react";

import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";

const footerContent = {
  shop: {
    title: "SHOP",
    links: [
      {
        label: "Men's sneakers",
        to: "#",
      },
      {
        label: "Women's sneakers",
        to: "#",
      },
      {
        label: "Kid's sneakers",
        to: "#",
      },
      {
        label: "Sale items",
        to: "#",
      },
    ],
  },
  information: {
    title: "INFORMATION",
    links: [
      {
        label: "About us",
        to: "#",
      },
      {
        label: "Contact us",
        to: "#",
      },
      {
        label: "Privacy policy",
        to: "#",
      },
      {
        label: "Terms & conditions",
        to: "#",
      },
    ],
  },
  customerService: {
    title: "CUSTOMER SERVICE",
    links: [
      {
        label: "Payment methods",
        to: "#",
      },
      {
        label: "Money-back guarantee!",
        to: "#",
      },
      {
        label: "Returns",
        to: "#",
      },
      {
        label: "Shipping",
        to: "#",
      },
      {
        label: "FAQ",
        to: "#",
      },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="border-t bg-neutral-50">
      <Container className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-4 font-semibold">{footerContent.shop.title}</h3>
          <ul className="space-y-3">
            {footerContent.shop.links.map((link, index) => (
              <li key={index} className="p-0 text-neutral-500">
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">
            {footerContent.customerService.title}
          </h3>
          <ul className="space-y-3">
            {footerContent.customerService.links.map((link, index) => (
              <li key={index} className="p-0 text-neutral-500">
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">
            {footerContent.information.title}
          </h3>
          <ul className="space-y-3">
            {footerContent.information.links.map((link, index) => (
              <li key={index} className="p-0 text-neutral-500">
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-start justify-start gap-4 md:justify-end">
          <Link to="#" className="size-5">
            <img src={FacebookIcon} alt="Twitter" />
          </Link>
          <Link to="#" className="size-5">
            <img src={InstagramIcon} alt="Instagram" />
          </Link>
          <Link to="#" className="size-5">
            <img src={TwitterIcon} alt="Twitter" />
          </Link>
        </div>
      </Container>
      <div className="h-px w-full bg-gray-200"></div>
      <Container className="flex flex-col gap-4 py-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="text-center text-sm font-bold">restocks</div>
          <ul className="flex flex-col gap-3 sm:flex-row">
            <li className="p-0 text-neutral-500">Terms & Conditions</li>
            <li className="p-0 text-neutral-500">Privacy Policy</li>
            <li className="p-0 text-neutral-500">Other Policies</li>
          </ul>
        </div>
        <div className="text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} Sneaker Store. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
