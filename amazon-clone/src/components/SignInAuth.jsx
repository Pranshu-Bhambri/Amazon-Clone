import React from 'react'
import "../components-css/SignIn.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';

// const popupArrow= document.getElementById("popup-arrow");

// function openBox(){
//     // console.log("Opened");
//     const popupArrow= document.getElementById("popup-arrow");
//     const authDetails= document.getElementById("auth-details");
//     popupArrow.style.color="#272727";
//     authDetails.classList.toggle("auth-details-onclick");
// }

function enableHover(){
    const popupArrow= document.getElementById("popup-arrow");
    popupArrow.style.color="#272727";
}

function disableHover(){
    const popupArrow= document.getElementById("popup-arrow");
    popupArrow.style.color="#666666";
}

function SignInAuth() {
  return (
    <div className='signin'>
        <Link to="/" className='link'>
            <div className="signin-logo">
                <img src="https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png" alt="" className='signin-amazon'/>
                <span className='signin-domain'>.in</span>
            </div>
        </Link>
        <div className="signin-box">
            <h1>Sign-In</h1>
            <span className='entered-email'>pranshu.bhambri@gmail.com&nbsp;</span>
            <Link to="/signin" className='link'>
                <span className='change'>Change</span>
            </Link>
            <form action="/signin/auth" method='post'>
                <div className="label-and-forgot">
                    <label htmlFor='authorize' className='authorize-label'>Password</label>
                    <span className='forgot'>Forgot Password</span>
                </div>
                <input id='authorize' className='signin-auth-input authorize' type="password" name='password' required />
                <button className="signin-btn" type="submit">Sign-In</button>
            </form>
            <div className="keep-me-signed-in">
                <input id='check' className='check' type="checkbox" name="rememberme" />
                <label htmlFor="check" className='check-label'><span className='auth-disclaimer'>Keep me signed in.</span></label>
                <a href="/#" id='auth-details' className="auth-details" onMouseOver={enableHover} onMouseLeave={disableHover}  onClick={e => {e.preventDefault()}}>
                Details
                <ArrowDropDownIcon id="popup-arrow" className='popup-arrow'/>
                </a>
                {/* <span id='auth-details' className="auth-details" onMouseOver={enableHover} onMouseLeave={disableHover}>Details <ArrowDropDownIcon id="popup-arrow" className='popup-arrow'/></span> */}
            </div>           
        </div>

        <div className="divider or-divider">or</div>

        {/* <Link to="/register" className='link'> */}
            <button className='otp-option'>Get an OTP on your phone</button>
        {/* </Link> */}

        <div className="rates-disclaimer">
            <i className="info-icon"></i>
            <span>Message and Data rates may apply</span>
        </div>
        {/* <div className="big-divider"></div> */}

        <hr />

        <div className="signin-footer-top">
            <a href="/">Conditions of Use</a>
            <a href="/">Privacy Notice</a>
            <a href="/">Help</a>
        </div>

        <div className="signin-footer-bottom">
            <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
        </div>

    </div>
  )
}

export default SignInAuth;
