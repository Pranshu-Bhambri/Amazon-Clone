import React from 'react'
import "../components-css/Header2.css";
import links from "../subHeader-Links";
import MenuIcon from '@material-ui/icons/Menu';
import Header2Links from './Header2Links';
// import CloseIcon from '@material-ui/icons/Close';

function showLinks(Link) {
  return (
    <Header2Links
      key={Link.id}
      name={Link.name}
      drop={Link.drop}
    />
  );
}

function Header2() {
  return (
    <div className="header2">
        <div className="all-options">
            <div className="all-menu">
              <MenuIcon className='ham'/>
              <span className='menu'>All</span>
            </div>
            <ul className='header2-list'>{links.map(showLinks)}</ul>
        </div>
        <img className='advertise' src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="amazon-app" />
        {/* <img className='movie' src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Shamshera/400x39-SWM_179._CB629959833_.jpg" alt="movie" /> */}
    </div>
  )
}

export default Header2;
