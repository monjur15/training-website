import React from 'react';
import './Login.css'


const Login = () => {
    return (
        <div className="login_from">
            <div className="login_part">
                <div className="log_box1">
                    <div className="login_cover">
                        <img src="../../images/Training logo.png" alt=""></img>
                    </div>
                    <fieldset className="login_fields">
                        <legend>Email</legend>
                        <input type="email" placeholder="Enter Email"></input>
                    </fieldset>
                </div>
                <div>

                    <fieldset className="login_fields">
                        <legend>Password</legend>
                        <input type="password" placeholder="Enter Password"></input>
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