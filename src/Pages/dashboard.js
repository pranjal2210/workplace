import React from "react";
import '../Styles/dashboard.css';
import Header from '../Components/Header';
import Footer from "../Components/Footer";

function Dashboard() {
  return (
    <>
      <Header />

      <div className="main">
        <div className="subHeader" >
          <div className="left">
            <h1>Take a deeper dive into<br />a new way to work.</h1>
            <h3>Creating a collaborative sphere for effective workplace management.</h3>
          </div>
          <div className="right">
            <img src="/images/rightimg.png" draggable="false" alt="rightImg" />
          </div>
        </div>
        <div className="features" id="features">
          <div className="card">
            <div className="left1">
              <h1>Move faster with your<br />tools in one place</h1>
              <h3>Automate away routine tasks with the power of generative AI and simplify your workflow with all your favourite apps ready to go in CollabSphere.</h3>
            </div>
            <div className="right1">
              <img src="/images/rightimg.png" alt="rightImg" />
            </div>

          </div>
          <div className="card">
            <div className="right1">
              <img src="/images/rightimg.png" alt="rightImg" />
            </div>
            <div className="left1">
              <h1>Choose how you <br />want to work</h1>
              <h3>In CollabSphere, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.</h3>
            </div>


          </div>
          <div className="card">
            <div className="left1">
              <h1>Bring your team<br /> together</h1>
              <h3>At the heart of CollabSphere are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</h3>
            </div>
            <div className="right1">
              <img src="/images/rightimg.png" alt="rightImg" />
            </div>

          </div>

        </div>
        <div className="community" id="community">
          <div className="left2">
            <h1>Introducing<br />communities</h1>
            <h3>Bring your community together in one place to make <br />announcements, plan events, and get more done.<br /> Join or create your own community today.</h3>
            <button className="btn">
              Create your community &rarr;
            </button>
          </div>
          <div className="right2">
            <img src="/images/community.gif" alt="community" />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
export default Dashboard;
