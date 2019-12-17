import React from 'react';
import classhead from './Header.module.css';

const Header = () => {
  return (
    <header className= {classhead.header}>
        <img src="https://retohercules.com/images/dell-logo-transparent-11.png"  alt = "logo"/>
        <h5>Social Network</h5>
        <div className = {classhead.reg}>
          <h3> Sing Up</h3>
          <h3> Log In</h3>
        </div>
          
    </header>
  );
}


export default Header;