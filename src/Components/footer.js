import React from "react";
import '../styles/footer.css';

function footer() {
    return (
        <>
            <hr className="head" />
            <div className="footer">
                <div className="logotext">
                    <img src="/images/collabLogo.png" alt="logo" className="logoimg" />
                    CollabSphere
                </div>
                <div className="foot">
                    ©2023 CollabSphere . All rights reserved. Various trademarks held by their respective owners.
                </div>
                <div className="navLinks">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#community">Community</a>
                </div>
            </div>
        </>
    );
}
export default footer;