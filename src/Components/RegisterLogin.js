import React, { useState } from "react";
import '../styles/registerLogin.css';
import {postData} from "../FetchNodeServices"

function RegisterLogin(props) {
    const [action, setAction] = useState("Login");
    const [eid, setEid] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => {
        props.onClose();
    }
    const handleSubmit = async () => {
        var body = { eid: eid, email: email, name: name, password: password }
        var result = await postData("users/insertuser", body)
        console.log(result)
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
                            <form className="login">
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
                            <form className="signup">
                                <div className="field">
                                    <input type="text" placeholder="Employee Id" required onChange={(event) => setEid(event.target.value)} />
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Full Name" required onChange={(event) => setName(event.target.value)} />
                                </div>
                                <div className="field" style={{ display: "none" }}>
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <div className="field">
                                    <input type="email" placeholder="Email" required onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Password" required onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Confirm Password" />
                                </div>
                                <div className="field">
                                    <div className="btn-layer"></div>
                                    <input type="submit" value="Signup" onClick={handleSubmit} />
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