import React from 'react'
import "../components-css/Personalized.css";
import { Link } from 'react-router-dom';

function Personalized() {
  return (
    <div className='personalized'>
      <div className="box">
        {/* <hr className='divider'/> */}
        <p className='recommend'>See personalized recommendations</p>
        <Link to="/signin" className='link'>
          <span className='btn signin-bottom'>Sign in</span>
        </Link>
        <p className='new-user'>New customer?
        <Link to="/register" className='link'>
          <span className='start'>Start here.</span>
        </Link>
        </p>
      </div>
    </div>
  )
}

export default Personalized;
