import React from "react";
import "./Footer.css";
import kandjicon from "../images/kandj.png";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__date">11.6.2021</p>
      <img className="footer__icon" src={kandjicon} alt="kandj-icon" />
      <p>
        &copy; 2021 created by <a href="https://www.jamessmithweb.com">Jimmy</a>
      </p>
    </div>
  );
};

export default Footer;
