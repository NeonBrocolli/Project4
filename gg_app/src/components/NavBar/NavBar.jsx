import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <a>High Lights</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a>GG</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span>WELCOME</span>
    </div> :
    <div>
        <Link to="/login" className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
    </div>;

    return (
    <div className="NavBar navbar navbar-default">
    {nav}
    </div>
  );
};

export default NavBar;