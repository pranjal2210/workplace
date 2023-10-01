import React, { useRef, useState } from "react";
import '../styles/registerLogin.css';
import { postData } from "../FetchNodeServices";
import { useNavigate } from 'react-router-dom';

function RegisterLogin(props) {
    const [eid, setEid] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();


    const handleClose = () => {
        props.onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            var body = { eid: eid, email: email, name: name, password: password };
            var result = await postData("users/insertuser", body);
            alert(result.message);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            var body = { email: loginEmail, password: loginPassword };
            var result = await postData("users/userlogin", body);
            alert(result.message);
            if (result.message === "Login successful") {
                navigate('/home');
                localStorage.setItem("userData", JSON.stringify(result));
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


    return (
        <div className="pop-up">
            <div className="wrapper" ref={wrapperRef}>
                <button className="closeBtn" onClick={handleClose}>&#10006;</button>

                <div className="slide-controls">
                    <button type="button" className="loginBtn slide" onClick={loginFormBtnHandler} ref={loginBtnRef} >Sign in</button>
                    <button type="button" className="registerBtn slide" onClick={registerFormBtnHandler} ref={regBtnRef} >Sign up</button>

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
