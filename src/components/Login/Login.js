import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';
import './Login.css'


const Login = () => {
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const passIcon = <FontAwesomeIcon icon={faEye} />;
    return (
        <div className="login_from">
            <div className="login_part">
                <div className="log_box1">
                    <div className="login_cover">
                        <img src="../../images/Training logo.png" alt=""></img>
                    </div>
                    <fieldset className="login_fields">
                        <legend>Email</legend>

                        <input type="email" placeholder="Enter Email" ></input>
                        <span>{emailIcon}</span>
                    </fieldset>
                </div>
                <div>

                    <fieldset className="login_fields">
                        <legend>Password</legend>
                        <input type="password" placeholder="Enter Password"></input>
                        <span>{passIcon}</span>
                    </fieldset>
                </div>
            </div>
            <div className="login_banner">
                <h1>hello</h1>
            </div>

        </div>
    );
};

export default Login;