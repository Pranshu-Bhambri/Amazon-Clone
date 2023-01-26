import React from 'react'
import "../components-css/SignInHome.css";
import { Link } from 'react-router-dom';

function SignInHome() {
  return (
    <div className='sign-in-home'>
      <h5 className='signin-head'>Sign In for your best experience</h5>
      <Link to="/signin" className='link'>
        <span className='btn signin-top'>Sign in securely</span>
      </Link>
    </div>
  )
}

export default SignInHome;
