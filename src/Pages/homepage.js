import React, { useEffect, useState } from "react";
import "../styles/homepage.css";
import ChatBox from "../Components/chatBox";
import { postData,getData } from "../FetchNodeServices";

function HomePage() {
  const [open, isOpen] = useState(false);
  const [channel,setChannel]=useState([]);
  const [channelName,setChannelName]=useState("");



  function handleDropdown() {
    isOpen(!open);
  }
 
  const fetchChannels=async(e)=>{
    var result=await getData("users/displayChannels")
   setChannel(result.data)
  }

  function handleChannelName(data){
    setChannelName(data)
  }

  useEffect(function(){
    fetchChannels()
   },[])

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
                  {channel.map((data)=>(
                    <div onClick={()=>handleChannelName(data.channelName)} key={data._id}>
                      <h4>#{data.channelName}</h4>
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
