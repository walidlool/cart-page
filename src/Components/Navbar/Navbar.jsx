import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          egybusiness.ae
        </a>
        <button className="menu-button">Menu</button>
        <input
          type="text"
          className="search-input"
          placeholder="Search over 50 million products"
        />
      </div>
      <div className="navbar-right">
        <button className="delivery-button">Deliver to</button>
        <div className="auth-buttons">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
