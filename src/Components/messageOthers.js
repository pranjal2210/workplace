import React from "react";
import '../styles/message.css';
import { Avatar } from "@mui/material";

function messageOthers() {
    return (
        <>
            <div className="messageDiv">
                <Avatar sx={{ bgcolor: '#24305E', width: 40, height: 40 }}>PS</Avatar>
                <div className="msgWrapper msgother">
                    <p className="sender">Pranjal</p>
                    <div className="message">
                        <p className="msgText">Hello Everyone, My name is Pranjal Sengar. Wishing you all a very happy Eid.Hello Everyone, My name is Pranjal Sengar. Wishing you all a very happy Eid.</p>
                    </div>
                    <p className="msgTime">8:30 am</p>
                </div>
            </div>

        </>
    );
}
export default messageOthers;