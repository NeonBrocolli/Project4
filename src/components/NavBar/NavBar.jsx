import React from 'react';
import {Link} from 'react-router-dom';
import {
  Navbar,
  Button,
  SideNav,
  SideNavItem } from 'react-materialize';
import './NavBar.css';

const NavBar = (props, context) => {
  let nav = props.user ?
  <div className="nav-text">
    <ul>
      <li><Link to="/videos"><i className="material-icons">videocam</i></Link></li>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <li><Link to="" onClick={props.handleLogout}><i className="material-icons">settings_power</i></Link></li>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <li><Link to="/"><i className="material-icons">home</i></Link></li>
      <li>&nbsp;&nbsp;</li>
      <li>WELCOME, {props.user.name}</li>
    </ul>
  </div> :
  <div className="nav-text">
    <ul>
      <li><Link to="/login" >LOG IN</Link></li>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <li><Link to="/signup" >SIGN UP</Link></li>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <li><Link to="/"><i className="material-icons">home</i></Link></li>
    </ul>
  </div>;

    return (
      <nav>
        <Navbar className="grey darken-3">
          {nav}
            <SideNav
                trigger={
                    <Button floating large waves="light" className="sidenav red" icon="menu" />
                  }
                options={{ closeOnClick: true }}
                >
                <SideNavItem userView
                    user={{
                        image: 'http://i.imgur.com/ijSdYH4.png'
                    }}
                />
                <SideNavItem divider />
                <SideNavItem href="/skilled" icon="gavel">Jouzu</SideNavItem>
                <SideNavItem href="/funny" icon="tag_faces">For The LoLs</SideNavItem>
                <SideNavItem href="/rage" icon="sentiment_very_dissatisfied">Tilted</SideNavItem>
                <SideNavItem href="/liked" icon="favorite">Liked</SideNavItem>
                <SideNavItem waves href="/">Back to Main</SideNavItem>
            </SideNav>
        </Navbar>
      </nav>
    );
};

export default NavBar;