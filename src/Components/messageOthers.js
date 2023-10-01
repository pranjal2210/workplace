import React from "react";
import '../styles/message.css';

function messageOthers() {
    return (
        <>
            <div className="messageDiv">
                <div className="msgAvatarOthers">
                    <h1>P</h1>
                </div>
                <div className="msgWrapper msgother">
                    <p className="sender">Pranjal</p>
                    <div className="message">
                        <p className="msgText">Hello Everyone, My name is Pranjal Sengar. Wishing you all a very happy Eid.Hello Everyone, My name is Pranjal Sengar. Wishing you all a very happy Eid.</p>
                    </div>
                    <p className="msgTime">8:30 am</p>
                </div>
            </div>

        </>
    )
}
export default messageOthers;