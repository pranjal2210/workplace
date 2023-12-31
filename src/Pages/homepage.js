import React, { useEffect, useRef, useState } from "react";
import "../styles/homepage.css";
import ChatBox from "../components/chatBox";
import Conversation from "../components/conversation";
import { postData, getData } from "../FetchNodeServices";
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

function HomePage() {
  const [open, isOpen] = useState(false);
  const [openUser, isOpenUser] = useState(false);
  const [openConvo, isOpenConvo] = useState(false);
  const [channel, setChannel] = useState([]);
  const [channelName, setChannelName] = useState("welcome");
  const [chats, setChats] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentChat,setCurrentChat]=useState(null);
  const [onlineUsers,setOnlineUsers]=useState([])
  const [createChat,setCreateChat]=useState([])
  const socket=useRef()
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(()=>{
    socket.current=io('http://localhost:8800');
    socket.current.emit("new-user-add",userData._id);
    socket.current.on('get-users',(users)=>{
      setOnlineUsers(users);
    })
  },[users])

  const nav = useNavigate();

  function handleDropdown() {
    isOpen(!open);
  }

  function handleUserDropdown() {
    isOpenUser(!openUser);
  }

  function handleConvoDropdown() {
    isOpenConvo(!openConvo);
  }

  const fetchChannels = async (e) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    var result = await getData("channel/displayChannels", config);
    setChannel(result.data);
  };

  const fetchUsers = async (e) => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const currentUserId = userData.eid;
    var result = await getData(`channel/displayUsers/${currentUserId}`, config);
    setUsers(result.data);
    // console.log("RESULT:", result.data);
  };

  function handleChannelName(data) {
    setChannelName(data);
  }
   const handleCreateChat=async(data)=>{
    try{
      var body={
          senderID:userData._id,
          receiverID:data._id
      }
      const result = await postData('chat/createChat',body);
      console.log(result)
  }
  catch(error){
      console.log(error);
  }
   }
  useEffect(function () {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      nav(-1);
    }

    fetchChannels();
    fetchUsers();

    const getChats = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };

      try {
        const result = await getData(`chat/userChat/${userData._id}`, config);
        // console.log('chats:', result);
        setChats(result);
      } catch (error) {
        console.log("error in getChats", error);
      }
    };
    getChats();
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

            <div className="conversations">
              <div className="convoDropdown">
                <i className={`${!openConvo ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}`} onClick={handleConvoDropdown}></i>
                <h3>Conversations</h3>
              </div>
              {!openConvo ?
                <div className="convoWrapper">
                  {chats.map((chat) => (
                    <div onClick={()=>setCurrentChat(chat)}>
                    <Conversation key={chat._id} chatData={chat} />
                    </div>
                  ))}
                </div>
                : <></>}
            </div>
            <div onClick={showTimesheet}>
              <h4>Timesheet</h4>
            </div>
            <div className="allUsers">
              <div className="usersDropdown">
                <i className={`${!openUser ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}`} onClick={handleUserDropdown}></i>
                <h3>All users</h3>
              </div>
              {!openUser ?
                <div className="usersWrapper">
                  {users.map((data) => (
                    <div key={data._id} onClick={()=>handleCreateChat(data)}>
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
            <ChatBox currentUser={userData._id} channelName={channelName} chat={currentChat} />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;