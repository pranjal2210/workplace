import React, { useEffect, useRef, useState } from "react";
import '../styles/registerLogin.css';
import { postData } from "../FetchNodeServices";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function RegisterLogin(props) {
    const [eid, setEid] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [openAlert, setOpenAlert] = React.useState(false);
    const [alertMsg, setAlertMsg] = React.useState("");
    const [alertType, setAlertType] = React.useState("success");

    const navigate = useNavigate();


    const handleClose = () => {
        props.onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            var body = { eid: eid, email: email, name: name, password: password };
            var result = await postData("users/insertuser", body);
            setAlertMsg(result.message);
            setAlertType(result.msgType);
            setOpenAlert(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            var body = { email: loginEmail, password: loginPassword };
            var result = await postData("users/userlogin", body);
            setAlertMsg(result.message);
            setAlertType(result.msgType);
            setOpenAlert(true);
            if (result.message === "Login successful") {
                const timer = setTimeout(() => {
                    setOpenAlert(false);
                    navigate('/home');
                    localStorage.setItem("userData", JSON.stringify(result));
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
    const loginFormRef = useRef(null);
    const registerFormRef = useRef(null);
    const loginBtnRef = useRef(null);
    const regBtnRef = useRef(null);
    const btnRef = useRef(null);

    const loginFormBtnHandler = () => {
        const domWrapperRef = wrapperRef.current;
        const domElementLogin = loginFormRef.current;
        const domElementReg = registerFormRef.current;
        const domLoginBtn = loginBtnRef.current;
        const domRegBtn = regBtnRef.current;
        const domBtn = btnRef.current;

        if (domElementLogin && domElementReg && domBtn) {
            domWrapperRef.style.height = "320px";
            domElementLogin.style.left = "60px";
            domElementReg.style.left = "450px";
            domLoginBtn.style.color = "#fff";
            domRegBtn.style.color = "#000";
            domBtn.style.left = "0px";
        }
    };

    const registerFormBtnHandler = () => {
        const domWrapperRef = wrapperRef.current;
        const domElementLogin = loginFormRef.current;
        const domElementReg = registerFormRef.current;
        const domLoginBtn = loginBtnRef.current;
        const domRegBtn = regBtnRef.current;
        const domBtn = btnRef.current;

        if (domElementLogin && domElementReg && domBtn) {
            domWrapperRef.style.height = "520px";
            domElementLogin.style.left = "-350px";
            domElementReg.style.left = "60px";
            domLoginBtn.style.color = "#000";
            domRegBtn.style.color = "#fff";
            domBtn.style.left = "170px";
        }
    };

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
                    <button type="button" className="slide" onClick={loginFormBtnHandler} ref={loginBtnRef} >Sign in</button>
                    <button type="button" className="slide registerBtn" style={{ color: "#000" }} onClick={registerFormBtnHandler} ref={regBtnRef} >Sign up</button>

                    <div id="btn" ref={btnRef}></div>
                </div>

                <form className="login" id="login" ref={loginFormRef}>
                    <div className="field">
                        <input type="email" placeholder="Email Address" onChange={(event) => setLoginEmail(event.target.value)} required />
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Password" onChange={(event) => setLoginPassword(event.target.value)} required />
                    </div>
                    <div className="field">
                        <input type="submit" value="Sign in" onClick={handleLogin} />
                    </div>
                </form>

                <form className="signup" id="signup" ref={registerFormRef}>
                    <div className="field">
                        <input type="text" placeholder="Employee ID" required onChange={(event) => setEid(event.target.value)} />
                    </div>
                    <div className="field">
                        <input type="text" placeholder="Full Name" required onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="field" style={{ display: "none" }}>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="field">
                        <input type="email" placeholder="Email Address" required onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Password" required onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="field">
                        <div className="btn-layer"></div>
                        <input type="submit" value="Sign up" onClick={handleSubmit} />
                    </div>
                </form>

            </div>
        </div>
    );
}
export default RegisterLogin;
