import React, { useEffect } from "react";
import '../styles/header.css';
import RegisterLogin from "./registerLogin";
import { useState } from "react";

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
  }

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isPopupOpen]);

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
        <button className="btn" onClick={openPopup}>
          Signin
        </button>
        {isPopupOpen && <RegisterLogin onClose={closePopup} />}
      </div>
    </div>
  );
}
export default Header;