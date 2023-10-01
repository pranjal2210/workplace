import React, { useEffect, useState } from "react";
import "../styles/homepage.css";
import ChatBox from "../Components/chatBox";
import { postData, getData } from "../FetchNodeServices";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [open, isOpen] = useState(false);
  const [openUser, isOpenUser] = useState(false);
  const [channel, setChannel] = useState([]);
  const [channelName, setChannelName] = useState("");
  const [users, setUsers] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  if (!userData) {
    alert("Please log in first")
    nav(-1);
  }


  function handleDropdown() {
    isOpen(!open);
  }
  
  function handleUserDropdown() {
    isOpenUser(!openUser);
  }

  const fetchChannels = async (e) => {
    var result = await getData("channel/displayChannels");
    setChannel(result.data);
  };

  const fetchUsers = async (e) => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    var result = await getData("channel/displayUsers",config);
    setUsers(result.data);
    console.log("RESULT:",result.data)
  };

  function handleChannelName(data) {
    setChannelName(data);
  }

  function handleUsers(data) {
    setUsers(data);
  }

  useEffect(function () {
    fetchChannels();
    fetchUsers();
  }, []);

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
                  {channel.map((data) => (
                    <div onClick={() => handleChannelName(data.channelName)} key={data._id}>
                      <h4>#{data.channelName}</h4>
                    </div>
                  ))}
                </div>
                : <></>}
            </div>

            <div className="allUsers">
              <div className="usersDropdown">
                <i className={`${!openUser ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}`} onClick={handleUserDropdown}></i>
                <h3>All users</h3>
              </div>
              {!openUser ?
                <div className="usersWrapper">
                  {users.map((data) => (
                    <div onClick={() => handleUsers(data.name)} key={data._id}>
                      <h4>{data.name}</h4>
                    </div>
                  ))}
                </div>
                : <></>}
            </div>
          </div>

        </div>
        <div className="rightbar">
          <div className="inner">
            <ChatBox channelName={channelName} />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
