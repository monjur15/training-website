import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faEye, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Signup.css'

const Signup = () => {
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    return (
        <div className='signup_main'>
            <div className="signup_banner">

                <div className='ellipse1'>
                    <div className='bubble1'></div>
                    <div className='bubble2'></div>
                </div>
                <div className='signup_pic'><img src="../../images/Training logo.png" alt="" />

                </div>
                <div className='ellipse3'>
                    <div className='bubble3'></div>
                </div>
            </div>

            <div className='signup_here'>
                <h1>Create Account</h1>
                <div className='signup_fields'>
                    <input type="text" placeholder='Enter Username' />
                    <span>{emailIcon}</span>

                </div>

                <div className='signup_fields'>
                    <input type="text" placeholder='Enter Username' />
                    <span>{emailIcon}</span>

                </div>

                <div className='signup_fields'>
                    <input type="text" placeholder='Enter Username' />
                    <span>{emailIcon}</span>

                </div>

                <div className='signup_fields'>
                    <input type="text" placeholder='Enter Username' />
                    <span>{emailIcon}</span>

                </div>

            </div>

        </div>
    );
};

export default Signup;