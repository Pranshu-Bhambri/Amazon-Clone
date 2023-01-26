import React from 'react'
import "../components-css/SignIn.css";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';

// const Help= document.getElementById("help");

function openOptions(){
    // console.log("Opened");
    const expandIcon= document.getElementById("expand-icon");
    const expandOptions= document.getElementById("expanded");
    expandIcon.classList.toggle("expand-icon-rotate");
    expandOptions.classList.toggle("expanded-display");
}

// function enableHover(){
//     const Help= document.getElementById("help");
//     Help.style.color="#c45500";
// }

// function disableHover(){
//     const Help= document.getElementById("help");
//     Help.style.color="#0066c0";
// }

function SignIn() {

//   const [header, setHeader]= useState("");

//   function handleChange(e){
//     console.log(e.target.value);
//     setHeader(e.target.value);
//     return header;
//   }

//   const [{ basket, user }, dispatch] = useStateValue();

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
            <form action="/signin" method='post'>
                <label htmlFor='email-mobile' className='email-mobile-label'>Email or mobile phone number</label>
                <input id='email-mobile' className='signin-input email-mobile' type="text" name='emailmobile' required />
                {/* <Link to="/signin/auth" className='link'> */}
                    <button className="signin-btn" type="submit">Continue</button>
                {/* </Link> */}
            </form>
            <div className="signin-disclaimer">
                By continuing, you agree to Amazon's&nbsp;
                <a href="/">Conditions of Use</a>
                &nbsp;and&nbsp;
                <a href="/">Privacy Notice</a>
                .
            </div>
            <div className='expand-help' onClick={openOptions}>
                {/* <ArrowRightIcon id='expand-icon' className='expand-icon'/> */}
                <a href="/#" id='help' className='help' onClick={e => {e.preventDefault()}}>
                <ArrowRightIcon id='expand-icon' className='expand-icon'/>
                Need Help?
                </a>
                {/* <span className='help'>Need Help?</span> */}
            </div>
            <div id='expanded' className="expanded">
                <a href="/" className='expanded-options'>Forgot Password</a>
                <a href="/" className='expanded-options'>Other issues with Sign-In</a>
            </div>            
        </div>

        <div className="divider">New to Amazon?</div>

        <Link to="/register" className='link'>
            <button className='new-account'>Create your Amazon Account</button>
        </Link>
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

export default SignIn;
// export {header};
