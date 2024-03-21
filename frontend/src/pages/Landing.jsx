import React from "react";
import hero from "../assets/icons/hero2.png";

export default function Landing() {
  return (
    <>
      <div className="hero">
        <div className="hero-circle"> </div>
        <img className="hero-img" src={hero} alt="" />
      </div>
      <div className="hero-about">
        <div>
          <p>LIMITED OFFER</p>
          <h3> SAVE 10%</h3>
          <p>USE DISCOUNT</p>
          <button>10OFF</button>
        </div>
      </div>
      <div className="container">
        <h1>Just arrived...</h1>
        <h1>Shop brand...</h1>
        <h1>News letter...</h1>
      </div>
    </>
  );
}
