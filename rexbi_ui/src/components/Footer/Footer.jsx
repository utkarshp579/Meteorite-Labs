import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <FooterLeft />
        <FooterRight />
      </div>
    </footer>
  );
};

export default Footer;
