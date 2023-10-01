import React from "react";
import '../styles/homepage.css';
import MessageSelf from "./messageSelf";
import MessageOthers from "./messageOthers";

function chatBox(props) {
    return (
        <>
            <div className="userBar">
                Pranjal
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
export default chatBox;