import React, { useState } from "react";
import "../styles/homepage.css";
import { postData } from "../FetchNodeServices";

function HomePage() {
  const [open, isOpen] = useState(false);



  function handleDropdown() {
    isOpen(!open);
  }

  const addChannel = async (e) => {
    e.preventDefault();
    const channelName = prompt("Enter channel name: ");

    var body = { channelName: channelName };
    var result = await postData("users/addchannel", body);
    
    alert(result.message);
  };



  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="inner">
            <div className="logo">
              <img src="/images/collabLogo.png" alt="sidebar" />
              CollabSphere
            </div>
            <hr className="head" />
            <div className="channels">
              <div className="channelDropdown">
                <i className={`${!open ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}`} onClick={handleDropdown}></i>
                <h3>All channels</h3>
              </div>
              {!open ?
                <div className="channelwrapper">
                  <div>
                    <h4>#general</h4>
                  </div>
                  <div>
                    <h4>#teams</h4>
                  </div>
                  <div className="addChannel" onClick={addChannel}>
                    <h4>Add channel</h4>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                : <></>}
            </div>
          </div>

        </div>
        <div className="rightbar">
          <div className="inner">
            <div className="userBar">
              Pranjal
              <img src="/images/user.png" alt="user" />
            </div>
            <div className="channelTitle">#GENERAL</div>
            <div className="messageContainer">
              <div className="chatBox">
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
                <div className="messageDiv">
                  <div className="msgImg">
                    <img src="/images/user.png" alt="chatimg" />
                  </div>
                  <div className="message">
                    <p className="msgText">Hello Everyone</p>
                    <p className="nameAndTime">Pranjal <span>8:30am</span> </p>
                  </div>
                </div>
              </div>
              <div className="textBox">
                <input type="text" placeholder="Message" />
                <i class="fa-solid fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
