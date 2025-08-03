import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <FooterLeft />
      <FooterRight />
    </div>
  );
};

export default Footer;
