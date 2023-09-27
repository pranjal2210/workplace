import React, { useState } from "react";
import "../styles/homepage.css";

function HomePage() {
  const [open, isOpen] = useState(false);
  function handleDropdown() {
    isOpen(true);
  }
  function handleDropup() {
    isOpen(false);
  }
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="logo">
            <img src="/images/collabLogo.png" />
            CollabSphere
          </div>
          <hr className="head" />
          <div className="channels">
            <div className="channelDropdown">
              {open ?
                <i class="fa-solid fa-minus" onClick={handleDropup}></i>
                :
                <i class="fa-solid fa-plus" onClick={handleDropdown}></i>
              }
              <h3>All channels</h3>
            </div>
            {open ?
              <div className="channelwrapper">
                <div>
                  <h4>#General</h4>
                </div>
                <div>
                  <h4>#teams</h4>
                </div>
              </div>
              : <></>}
          </div>
        </div>
        <div className="rightbar">

        </div>
      </div>
    </>
  );
}
export default HomePage;
