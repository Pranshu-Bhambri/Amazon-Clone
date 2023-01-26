import React from 'react'
import "../components-css/Header2Links.css";
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header2Links(props) {
  return (
    <div className='header2Links'>
        <li className='sublink'>{props.name}</li>
        <span>{props.drop}</span>
        {/* <span>{props.name==="Prime" ? <ArrowDropDownIcon className='arrow'/> : "" }</span> */}
    </div>
  )
}

export default Header2Links;
