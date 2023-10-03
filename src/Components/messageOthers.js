import React from "react";
import '../styles/message.css';
import { Avatar } from "@mui/material";

function messageOthers(props) {
    const fname=props.name.split(' ');
    const ist=new Date(props.message.updatedAt.toLocaleString('en-US',{timeZone:'Asia/Kolkata'}));
    const istTime=ist.toLocaleTimeString('en-IN',{hour12:true});
    console.log(istTime);
    return (
       
            <div className="messageDiv" >
                <Avatar sx={{ bgcolor: '#24305E', width: 40, height: 40 }}>PS</Avatar>
                <div className="msgWrapper msgother" style={{width:"100%"}}>
                    <p className="sender">{fname[0]}</p>
                    <div className="message" style={{wordWrap:"break-word"}}>
                        <p className="msgText">{props.message.text}</p>
                    </div>
                    <p className="msgTime">{istTime.slice(0,5)} {istTime.slice(8)}</p>
                </div>
            </div>

       
    );
}
export default messageOthers;