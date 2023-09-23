import React from "react";
import '../styles/header.css';
import { useState } from "react";
import RegisterLogin from "../Pages/registerLogin";
import '../styles/registerLogin.css';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="root" id="home">
      <div className="subRoot">
        <div className="logotext">
          <img src="/collabLogo.png" alt="logo" className="logoimg" />
          CollabSphere
        </div>
        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#community">Community</a>
        </div>
      </div>
      <div>
        <button className="btn" onClick={() => setIsOpen(true)}>
          Signin
        </button>
        {isOpen && (
          <RegisterLogin/>
        )}
      </div>
    </div>
  )
}
export default Header;