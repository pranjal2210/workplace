import React, { useState } from "react";
import '../styles/registerLogin.css';

function RegisterLogin(props) {
    const [action, setAction] = useState("Login");

    const handleClose = () => {
        props.onClose();
    }

    return (
        <div className="pop-up">
            <div className="wrapper">
                <button className="closeBtn" onClick={handleClose}>&#10006;</button>
                <div className="form-container">
                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" checked={action === 'Login'} onClick={() => { setAction("Login"); }} />
                        <input type="radio" name="slide" id="signup" checked={action === 'Signup'} onClick={() => { setAction("Signup"); }} />
                        <label htmlFor="login" className="slide login" >Login</label>
                        <label htmlFor="signup" className="slide signup">Signup</label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                        {action === "Login" ?
                            <form action="#" className="login">
                                <div className="field">
                                    <input type="text" placeholder="Email Address" required />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <div className="field">
                                    <input type="submit" value="Login" />
                                </div>
                            </form>
                            :
                            <form action="#" className="signup">
                                <div className="field">
                                    <input type="text" placeholder="Email Address" required />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <div className="field" style={{ display: "none" }}>
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Confirm Password" required />
                                </div>
                                <div className="field">
                                    <div className="btn-layer"></div>
                                    <input type="submit" value="Signup" />
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RegisterLogin;