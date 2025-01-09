import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="foot_main">
      <div className="footer_logo">
        <p>logo</p>
        <p>Shopping_Mart</p>
      </div>
      <div className="medias">
        <li>
          <ul>
            <div className="instra">instra</div>
            <div className="whatsapp">wa</div>
            <div className="pinterest">pt</div>
          </ul>
        </li>
      </div>
      <div className="copyrights">
        <p>copyrights @2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
