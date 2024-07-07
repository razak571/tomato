import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/razakattar",
    facebook: "https://www.linkedin.com/in/razakattar",
    twitter: "https://www.linkedin.com/in/razakattar",
  };

  const handleRedirect = (url) => {
    // window.location.href = url;
    window.open(url);
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo-image" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="footer-social-icons">
            <img
              onClick={() => handleRedirect(socialLinks.facebook)}
              src={assets.facebook_icon}
              alt="fb-icon"
            />
            <img
              onClick={() => handleRedirect(socialLinks.twitter)}
              src={assets.twitter_icon}
              alt="x-icon"
            />
            <img
              onClick={() => handleRedirect(socialLinks.linkedin)}
              src={assets.linkedin_icon}
              alt="Li-icon"
            />
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
            <li>+1-212-567-5876</li>
            <li
              className="tomato"
              onClick={() => handleRedirect(socialLinks.linkedin)}
            >
              Visit my LinkedIn
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Tomato.com All Rights Reserved.
      </p>
      <p className="footer-copyright">
        Made by{" "}
        <a
          className="tomato"
          href="https://www.linkedin.com/in/razakattar"
          target="_blank underline"
        >
          Razak Attar{" "}
        </a>{" "}
        with love
      </p>
    </div>
  );
};

export default Footer;
