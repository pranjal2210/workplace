import React from "react";
import '../styles/message.css';

function messageSelf(props) {
    console.log("Chat :",props.message)
    const fname=props.name.split(' ');
    const ist=new Date(props.message.updatedAt.toLocaleString('en-US',{timeZone:'Asia/Kolkata'}));
    const istTime=ist.toLocaleTimeString('en-IN',{hour12:true});
    console.log(istTime);
    return (
        <>
            <div className="messageDiv2">
                <div className="msgWrapper msgself">
                    <p className="sender">{fname[0]}</p>
                    <div className="message">
                        <p className="msgText">{props.message.text}</p>
                    </div>
                    <p className="msgTime">{istTime.slice(0,4)} {istTime.slice(8)}</p>
                </div>
            </div>

        </>
    )
}
export default messageSelf;