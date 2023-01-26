import React from 'react'
import "../components-css/Footer1Links.css";

function Footer1Links(props) {
  return (
    <div className='footer1-links'>
        <li className='col-list'>
            <a href="/" className='col-link'>{props.link}</a>
        </li>
    </div>
  )
}

export default Footer1Links;

