import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props, context) => {
      console.log('nav props', props.user)
  let nav = props.user ?
  <div className="nav-content">
    <div className="nav-wrapper">
      <ul className="tabs tabs-transparent">
        <li className="tab"><Link to="/">Upload</Link></li>
        <li className="tab"><Link to="" onClick={props.handleLogout} >LOG OUT</Link></li>
        <li className="tab disabled"><a>WELCOME, {props.user.name}</a></li>
      </ul>
    </div>
  </div> :
  <div className="nav-content">
    <div className="nav-wrapper">
      <ul className="tabs tabs-transparent">
      <li className="tab"><Link to="/login" >LOG IN</Link></li>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <li className="tab"><Link to="/signup" >SIGN UP</Link></li>
      </ul>
    </div>
  </div>;

    return (
      <div className="nav-extend navbar-fixed-top grey darken-3">
        {nav}
      </div>
    );
};

export default NavBar;