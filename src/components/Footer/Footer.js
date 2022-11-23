import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <section className="footer flex flex-row bg-gdDarkGrayBlue">
      <img src={logo} alt="Logo" className="logoImg" />
      <section className="footerLink flex flex-col">
        <h5 className="footerHeading pb-8 font-bold">Product</h5>
        <ol className="links flex flex-col gap-y-3 text-footerText">
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ol>
      </section>
      <section className="footerLink flex flex-col">
        <h5 className="footerHeading pb-8 font-bold">Company</h5>
        <ol className="links flex flex-col gap-y-3 text-footerText">
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Integrations</li>
        </ol>
      </section>
      <section className="footerLink flex flex-col">
        <h5 className="footerHeading pb-8 font-bold">Connect</h5>
        <ol className="links flex flex-col gap-y-3 text-footerText">
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ol>
      </section>
    </section>
  );
}

export default Footer;
