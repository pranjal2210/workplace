import React, { useEffect, useState } from "react";
import '../styles/homepage.css';
import MessageSelf from "./messageSelf";
import MessageOthers from "./messageOthers";

function ChatBox(props) {
    const [name,setName]=useState("");
    const userData=JSON.parse(localStorage.getItem("userData"));
    const getName=()=>{
        setName(userData.name);
    }
    useEffect(function () {
        getName();
      }, []);
    return (
        <>
            <div className="userBar">
                {name}
                <img src="/images/user.png" alt="user" />
            </div>
            <div className="channelTitle">#{props.channelName}</div>

            <div className="messageContainer">
                {props.channelName !== "" ?
                    <>
                        <div className="chatBox">
                            <MessageOthers />
                            <MessageSelf/>
                            <MessageOthers />
                            <MessageSelf/>
                            <MessageOthers />
                            <MessageSelf/>
                            <MessageOthers />
                            <MessageSelf/>
                            <MessageSelf/>
                        </div>
                        <div className="textBox">
                            <input type="text" placeholder="Message" />
                            <i className="fa-solid fa-paper-plane"></i>
                        </div>
                    </>
                    :
                    <div className="chatLogo">
                        <img src="/images/collabLogo.png" alt="chatLogo"/>
                        CollabSphere
                    </div>
                }
            </div>
        </>
    );
}
export default ChatBox;