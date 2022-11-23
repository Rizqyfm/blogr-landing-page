import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      <section className="navbarContent flex flex-row justify-around">
        <section className="left">
          Product Overview Pricing Marketplace Features Integrations Company
          About Team Blog Careers Connect Contact Newsletter LinkedIn
        </section>
        <section className="right flex flex-row">
          <button type="button" className="login navbtn font-bold text-white">
            Login
          </button>
          <button
            type="button"
            className="sign navbtn font-bold text-ctaText bg-white"
          >
            Sign up
          </button>
        </section>
      </section>
    </section>
  );
}

export default Navbar;
