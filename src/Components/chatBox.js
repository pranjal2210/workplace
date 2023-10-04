import React, { useEffect, useState } from "react";
import '../styles/userprofile.css';
import MessageSelf from "./messageSelf";
import MessageOthers from "./messageOthers";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import UserProfile from "./userProfile";
import { getData, postData } from "../FetchNodeServices";
import InputEmoji from "react-input-emoji";

function ChatBox(props) {
    const [name, setName] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [usersData, setUsersData] = useState("");
    const [messages, setMessages] = useState([]);
    const [newMessage,setNewMessage]=useState("");

    const userDataJson = JSON.parse(localStorage.getItem("userData"));

    //fetching receivers
    const userId = props.chat?.members?.find((id) => id != props.currentUser);
    const getUserData = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${userDataJson.token}`,
            },
        };
        try {
            const result = await getData(`channel/displayAUser/${userId}`, config);
            // console.log("getUserData...", result.data.name);
            setUsersData(result.data);
            console.log(result);
        } catch (error) {
            console.log('error in getUserData', error);
        };

    }
    //fetching messages
    const fetchMessages = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${userDataJson.token}`,
            },
        };
        try {
            const data = await getData(`message/getMessages/${props.chat._id}`, config);
            setMessages(data);
            console.log("MESSAGES :", data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (props.chat !== null) {
            getUserData();
            fetchMessages();
        }
    }, [props])

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const userData = JSON.parse(localStorage.getItem("userData"));
    const getName = () => {
        setName(userData.name);
    };
    useEffect(function () {
        getName();
    }, []);


    const words = name.split(' ');
    const initials = words.map((word) => word[0]).join('');


    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleChange=(newMessage)=>{
      setNewMessage(newMessage);
    }
    const handleSend=async(e)=>{
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${userDataJson.token}`,
            },
        };
        
        //send message to database
        try{
            var body={
                chatID:props.chat._id,
                senderID:props.currentUser,
                text:newMessage,
            }
            const data = await postData('message/addMessage',body);
            setMessages([...messages,data])
            setNewMessage("");
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <>
            {props.chat ?
                <>
                    {isPopupOpen && <UserProfile onClose={closePopup} />}
                    <div className="userBar">
                        {name}

                        <React.Fragment>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ bgcolor: '#24305E', width: 50, height: 50 }}>{initials}</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1,
                                        width: 200,
                                        justifyContent: "center",
                                        fontSize: "20",
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 26,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem sx={{ justifyContent: "center", fontSize: '18px' }} onClick={openPopup}>
                                    Profile
                                </MenuItem>
                                <MenuItem sx={{ justifyContent: "center", fontSize: '18px' }} onClick={handleClose}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    </div >
                    {/* <div className="userBar">
                {name}
                <Avatar sx={{ bgcolor: '#24305E', width: 50, height: 50 }}>{initials}</Avatar>
            </div> */}

                    < div className="channelTitle" >#{usersData.name}</div >

                    <div className="messageContainer">

                        <div className="chatBox">
                            {messages.map((msg) =>
                                <>
                                    {msg.senderID !== userDataJson._id ?
                                        <MessageOthers message={msg} name={usersData.name} />
                                        :
                                        <MessageSelf message={msg} name={userDataJson.name} />
                                    }
                                </>
                            )}
                        </div>
                        <div className="textBox">
                            {/* <input type="text" placeholder="Message" /> */}
                            <InputEmoji value={newMessage} onChange={handleChange}/>
                            <i className="fa-solid fa-paper-plane" onClick={handleSend}></i>
                        </div>

                        {/* <div className="chatLogo">
                        <img src="/images/collabLogo.png" alt="chatLogo" />
                        CollabSphere
                    </div> */}
                    </div>
                </>
                :
                <div className="chatLogo">
                    CollabSphere
                      <img src="/images/collabLogo.png" alt="chatLogo"/>
                </div>
                }
        </>
    );
}
export default ChatBox;