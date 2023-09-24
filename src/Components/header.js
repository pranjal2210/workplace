import React, { useEffect } from "react";
import '../Styles/header.css';
import RegisterLogin from "./RegisterLogin";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className="root" id="home">
      <div className="subRoot">
        <div className="logotext">
          <img src="/images/collabLogo.png" alt="logo" className="logoimg" />
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
          <>
            <RegisterLogin />
            <button className="closeBtn" onClick={() => setIsOpen(false)}>&#10006;</button>
          </>
        )}
      </div>
    </div>
  );
}
export default Header;