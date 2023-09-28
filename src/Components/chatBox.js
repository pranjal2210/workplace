import React from "react";
import '../styles/homepage.css';
import MessageSelf from "./messageSelf";

function chatBox(props) {
    return (
        <>
            <div className="userBar">
                Pranjal
                <img src="/images/user.png" alt="user" />
            </div>
            <div className="channelTitle">#{props.channelName}</div>
            <div className="messageContainer">
                <div className="chatBox">
                    <MessageSelf/>
                </div>
                <div className="textBox">
                    <input type="text" placeholder="Message" />
                    <i class="fa-solid fa-paper-plane"></i>
                </div>
            </div>
        </>
    )
}
export default chatBox;