import React from "react";
import "../styles/Navbar.css";
import { Globe , Menu} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Rexby Logo" className="logo" />
        <h1 className="brand">Rexby</h1>
      </div>
      <div className="navbar-right">
        <button className="login-btn">Log in</button>
        <Globe className="w-5 h-5 icon " />
        <Menu className="w-5 h-5 icon " />
      </div>
    </nav>
  );
};

export default Navbar;
