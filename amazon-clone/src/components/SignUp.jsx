import React from 'react'
import "../components-css/SignUp.css";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';

// function openOptions(){
//     const ExpandIcon= document.getElementById("expand-icon");
//     const ExpandOptions= document.getElementById("expanded");
//     ExpandIcon.classList.toggle("expand-icon-rotate");
//     ExpandOptions.classList.toggle("expanded-display");
// }

function SignUp() {
  return (
    <div className='signup'>
        <Link to="/" className='link'>
            <div className="signup-logo">
                <img src="https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png" alt="" className='signup-amazon'/>
                <span className='signup-domain'>.in</span>
            </div>
        </Link>
        <div className="signup-box">
            <h1>Create Account</h1>
            <form action="/register" method="post">
                <label htmlFor='your-name' className='your-name-label'>Your name</label>
                <input id='your-name' className='input your-name' type="text" name='name' placeholder='First and last name' required/>

                <label htmlFor='mobile' className='mobile-label'>Mobile number</label>
                <div className="mobile-section">
                    <span>IN +91 <i className='code-selector-icon'></i> </span>
                    <input id='mobile' className='input mobile' type="text" name='phone' placeholder='Mobile number' required/>
                </div>

                <label htmlFor='email' className='email-label'>Email (optional)</label>
                <input id='email' className='input email' type="email" name='email' />

                <label htmlFor='password' className='password-label'>Password</label>
                <input id='password' className='input password' type="password" name='password' placeholder='At least 6 characters' required/>

                <div className="password-desc">
                    <i className='info-icon'></i>
                    <span>Passwords must be atleast 6 characters.</span>
                </div>

                <div className="signup-disclaimer">
                    We will send you a text to verify your phone.
                    <br />
                    Message and Data rates may apply.
                </div>

                <button className="signup-btn" type="submit">Continue</button>
            </form>

            <hr />

            <div className="existing-account">
                <span>Already have an account?</span>
                <Link to="/signin" className='link'>
                    <span className='signin-link'>Sign in <ArrowRightIcon className='link-arrow'/></span>
                </Link>
            </div>

            <div className="business-account">
                <span>Buying for work?</span>
                <span className='business-acc-link'>Create a free business account <ArrowRightIcon className='link-arrow'/></span>
            </div>
          
        </div>

        <hr />

        <div className="signup-footer-top">
            <a href="/">Conditions of Use</a>
            <a href="/">Privacy Notice</a>
            <a href="/">Help</a>
        </div>

        <div className="signup-footer-bottom">
            <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
        </div>

    </div>
  )
}

export default SignUp;

