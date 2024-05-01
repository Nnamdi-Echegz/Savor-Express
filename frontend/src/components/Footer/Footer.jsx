import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo2} alt="" />
          <p>
            Explore our delicious menu and order your favorite meals for
            delivery or pickup. We're committed to bringing you quality food
            with convenient service.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1 (343)788-9124</li>
                <li>savourexpress@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Copyright 2024 © SavourExpress.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
