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

function ChatBox(props) {
    const [name, setName] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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

    return (
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

            < div className="channelTitle" >#{props.channelName}</div >

            <div className="messageContainer">
                {props.channelName !== "welcome" ?
                    <>
                        <div className="chatBox">
                            <MessageOthers />
                            <MessageSelf />
                            <MessageOthers />
                            <MessageSelf />
                            <MessageOthers />
                            <MessageSelf />
                            <MessageOthers />
                            <MessageSelf />
                            <MessageSelf />
                        </div>
                        <div className="textBox">
                            <input type="text" placeholder="Message" />
                            <i className="fa-solid fa-paper-plane"></i>
                        </div>
                    </>
                    :
                    <div className="chatLogo">
                        <img src="/images/collabLogo.png" alt="chatLogo" />
                        CollabSphere
                    </div>
                }
            </div>
        </>
    );
}
export default ChatBox;