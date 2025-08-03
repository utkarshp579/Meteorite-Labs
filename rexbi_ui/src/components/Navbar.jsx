import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Rexby Logo" className="logo" />
        <h1 className="brand">Rexby</h1>
      </div>
      <div className="navbar-right">
        <button className="login-btn">Log in</button>
        <span className="icon">🌐</span>
        <span className="icon">☰</span>
      </div>
    </nav>
  );
};

export default Navbar;
