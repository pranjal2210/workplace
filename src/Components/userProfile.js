import React, { useEffect, useRef, useState } from "react";
import '../styles/userprofile.css';
import { postData } from "../FetchNodeServices";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function UserProfile(props) {
  const [showEid, setShowEid] = useState('');
  const [showName, setShowName] = useState('');
  const [showEmail, setShowEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState("");
  const [alertType, setAlertType] = React.useState("success");

  const handleClose = () => {
    props.onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var body = { eid: showEid, name: showName, email: showEmail, password: password };
      var result = await postData("users/updateuser", body);
      localStorage.setItem("userData", JSON.stringify(result));
      setOpenAlert(true);
      setAlertMsg(result.message);
      setAlertType(result.msgType);
      if (result.message === "Profile Updated") {
        const timer = setTimeout(() => {
          setOpenAlert(false);
          localStorage.setItem("userData", JSON.stringify(result));
          window.location.reload();
        }, 1000);

        return () => {
          clearTimeout(timer); // Clear the timer if the component unmounts before the timeout
        };
      }
    } catch (error) {
      console.log(error);
    }
  };

  const wrapperRef = useRef(null);
  const profileFormRef = useRef(null);
  const registerFormRef = useRef(null);
  const profileBtnRef = useRef(null);
  const updateBtnRef = useRef(null);
  const btnRef = useRef(null);

  const profileFormBtnHandler = () => {
    const domWrapperRef = wrapperRef.current;
    const domElementProfile = profileFormRef.current;
    const domElementReg = registerFormRef.current;
    const domProfileBtn = profileBtnRef.current;
    const domUpdateBtn = updateBtnRef.current;
    const domBtn = btnRef.current;

    if (domElementProfile && domElementReg && domBtn) {
      domWrapperRef.style.height = "320px";
      domElementProfile.style.left = "60px";
      domElementReg.style.left = "450px";
      domProfileBtn.style.color = "#fff";
      domUpdateBtn.style.color = "#000";
      domBtn.style.left = "0px";
    }
  };

  const updateFormBtnHandler = () => {
    const domWrapperRef = wrapperRef.current;
    const domElementProfile = profileFormRef.current;
    const domElementReg = registerFormRef.current;
    const domProfileBtn = profileBtnRef.current;
    const domUpdateBtn = updateBtnRef.current;
    const domBtn = btnRef.current;

    if (domElementProfile && domElementReg && domBtn) {
      domWrapperRef.style.height = "520px";
      domElementProfile.style.left = "-350px";
      domElementReg.style.left = "60px";
      domProfileBtn.style.color = "#000";
      domUpdateBtn.style.color = "#fff";
      domBtn.style.left = "170px";
    }
  };


  const userData = JSON.parse(localStorage.getItem("userData"));
  const getProfile = () => {
    setShowEid(userData.eid);
    setShowName(userData.name);
    setShowEmail(userData.email);
  };

  useEffect(function () {
    getProfile();
  }, []);

  useEffect(() => {
    if (openAlert) {
      const timer = setTimeout(() => {
        setOpenAlert(false);
      }, 4000);

      return () => {
        clearTimeout(timer); // Clear the timer if the component unmounts before the timeout
      };
    }
  }, [openAlert]); // Run the effect whenever openAlert changes

  return (
    <div className="pop-up">
      <Collapse in={openAlert} sx={{ position: "absolute", top: "20px", right: "40px", height: "80px" }}>
        <Alert severity={alertType}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, fontSize: "16px" }}
        >
          {alertMsg}
        </Alert>
      </Collapse>
      <div className="wrapper" ref={wrapperRef}>
        <button className="closeBtn" onClick={handleClose}>&#10006;</button>

        <div className="slide-controls">
          <button type="button" className="slide" onClick={profileFormBtnHandler} ref={profileBtnRef} >Your Profile</button>
          <button type="button" className="updateProfile slide" onClick={updateFormBtnHandler} ref={updateBtnRef} >Update Profile</button>

          <div id="btn2" ref={btnRef}></div>
        </div>

        <form className="yourProfile" id="yourProfile" ref={profileFormRef}>
          <div className="field">
            <input type="email" value={`Employee ID : ${showEid}`} disabled required />
          </div>
          <div className="field">
            <input type="text" value={`Name : ${showName}`} disabled required />
          </div>
          <div className="field">
            <input type="text" value={`Email ID : ${showEmail}`} disabled required />
          </div>
        </form>

        <form className="updateProfile" id="updateProfile" ref={registerFormRef}>
          <div className="field">
            <input type="text" value={showEid} disabled />
          </div>
          <div className="field">
            <input type="text" value={showName} required onChange={(event) => setShowName(event.target.value)} />
          </div>
          <div className="field">
            <input type="email" value={showEmail} required onChange={(event) => setShowEmail(event.target.value)} />
          </div>
          <div className="field">
            <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} required />
          </div>
          <div className="field">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="field">
            <div className="btn-layer"></div>
            <input type="submit" value="Update" onClick={handleSubmit} />
          </div>
        </form>

      </div>
    </div>
  );
}
export default UserProfile;