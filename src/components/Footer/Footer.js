import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <section className="footer flex flex-row bg-gdDarkGrayBlue">
      <img src={logo} alt="Logo" className="logoImg" />
      <section className="links flex flex-col">
        <h5>Product</h5>
        <ol>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ol>
      </section>
      <section className="links flex flex-col">
        <h5>Company</h5>
        <ol>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Integrations</li>
        </ol>
      </section>
      <section className="links flex flex-col">
        <h5>Connect</h5>
        <ol>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ol>
      </section>
    </section>
  );
}

export default Footer;
