import React from 'react';
import classhead from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className= {classhead.header}>
      <div className = {classhead.flexstyle}>
        <img src="https://retohercules.com/images/dell-logo-transparent-11.png"  alt = "logo"/>
        <h5>Social Network</h5>
      </div>
      <div className = {classhead.reg}>
          <NavLink to= "/auth" className = {classhead.NavLink} >Sing Up</NavLink>
          <NavLink to= "/sign_in" className = {classhead.NavLink}>Log In</NavLink>
        </div>
    </header>
  );
}


export default Header;