import React from 'react'
import "../components-css/Footer2Links.css";

function Footer1Links(props) {
  return (
    <div className='footer2-links'>
            <a href="/" className='column-data'>
                {props.head} <br />
                <span>{props.span1}</span> <br />
                <span>{props.span2}</span>
            </a>
        <td className='space'>

        </td>
    </div>
  )
}

export default Footer1Links;

