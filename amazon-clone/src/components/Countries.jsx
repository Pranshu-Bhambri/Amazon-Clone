import React from 'react'
import "../components-css/Countries.css";

function Country(props) {
  return (
    <div className='countries'>
      <li className='country-list'>
        <a href="/" className='country'>{props.country}</a>
      </li>
    </div>
  )
}

export default Country;
