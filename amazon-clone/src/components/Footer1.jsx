import React from 'react'
import "../components-css/Footer1.css";
import Footer1Links from './Footer1Links';
import Country from './Countries';
import links1 from "../Footer1Col1";
import links2 from "../Footer1Col2";
import links3 from "../Footer1Col3";
import links4 from "../Footer1Col4";
import countries from "../Countries";
import LanguageIcon from '@material-ui/icons/Language';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { Link } from 'react-router-dom';

function showLinks(Link){
    return(
        <Footer1Links
            key={Link.id}
            link={Link.link}
        />
    )
}

function showCountries(CountryName){
    return(
        <Country
            key={CountryName.id}
            country={CountryName.country}
        />
    )
}

function Footer1() {
  return (
    <div className='footer1'>
      {/* <div className="upper"> */}
        <div className="upper1">
            <div className="column">
                <span className='col-title'>Get to Know Us</span>
                <ul>
                    {links1.map(showLinks)}
                </ul>
            </div>
            <div className="column">
                <span className='col-title'>Connect with Us</span>
                <ul>
                    {links2.map(showLinks)}
                </ul>
            </div>
            <div className="column">
                <span className='col-title'>Make Money with Us</span>
                <ul>
                    {links3.map(showLinks)}
                </ul>
            </div>
            <div className="column">
                <span className='col-title'>Let Us Help You</span>
                <ul>
                    {links4.map(showLinks)}
                </ul>
            </div>
        </div>
        <div className="lower1">
            <div className="upper-div">
                <Link to="/" onClick={() => window.location.reload()} className='link'>
                    <img src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png" alt="" className='sec-logo'/>
                </Link>
                <div className="language-selector">
                    <LanguageIcon className='globe' />
                    <span className='select-language'>English</span>
                    <UnfoldMoreIcon className='selector' />
                </div>
            </div>
            <div className="lower-div">
                <ul>
                    {countries.map(showCountries)}
                </ul>
            </div>
        </div>
      {/* </div> */}
      {/* <div className="lower">
        <div className="upper2">

        </div>
        <div className="lower2">

        </div>
      </div> */}
    </div>
  )
}

export default Footer1;
