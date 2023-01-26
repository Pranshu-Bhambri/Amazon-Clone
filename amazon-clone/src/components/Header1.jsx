import React from 'react';
import "../components-css/Header1.css";
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
// const searchOptions= document.getElementsByClassName("search-options");
// const searchDropDown= document.getElementsByClassName("search-dropdown");

function Header1() {
//   function searchOptionChange() {
//     searchOptions.style.color="black";
//     searchDropDown.style.color="black";
//     searchOptions.style.backgroundColor="#cdcdcd";
//   }
  return (
    <div className="header1">
        <Link to="/" onClick={() => window.location.reload()} className='link'>
            <div className="logo general-hover">
                <img className='amazon' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
                <span className='domain'>.in</span>
            </div>
        </Link>

        <div className="address right-gap general-hover">
            <span className='hello sec-font'>Hello</span>
            <div className="bottom">
                <RoomOutlinedIcon className='location'/>
                <span className='prime-font'>Select your address</span>
            </div>
        </div>
    
        <div className="search right-gap general-hover">
            <div className="search-options">
                <span className='search-type'>All</span>
                <ArrowDropDownIcon className='search-dropdown'/>
            </div>
            <input type="text" />
            <SearchIcon className='search-icon'/>
        </div>

        <div className="language general-hover shift-left">
            <span className='lang sec-font'>English</span>
            <span className='flag-info'>
                <img className='flag' src="https://media.istockphoto.com/vectors/flag-of-india-vector-id519611160?k=20&m=519611160&s=612x612&w=0&h=n8mmywhzMzcrRI4I50uKYEFVeS4wDfpOGQGEaCK6YPw=" alt="flag" />
                <ArrowDropDownIcon className='dropdown'/>
            </span>
        </div>

        <Link to="/signin" className='link'>
            <div className="sign-in general-hover shift-left">
                <span className='text-scale sec-font'>Hello, Sign in</span>
                <span className='account prime-font'>Accounts & Lists <ArrowDropDownIcon className='dropdown'/></span>
            </div>
        </Link>

        <div className="orders general-hover shift-left">
            <span className='returns sec-font'>Returns</span>
            <span className='order prime-font'>& Orders</span>
        </div>

        <div className="cart general-hover shift-left">
            <span className='items-count'>0</span>
            <span className='cart-img'></span>
            {/* <ShoppingCartOutlinedIcon className='cart-icon'/> */}
            <span className='cart-text prime-font'>Cart</span>
        </div>
    </div>
  )
}

export default Header1;
