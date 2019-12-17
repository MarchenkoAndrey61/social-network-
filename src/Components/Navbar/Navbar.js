import React from 'react';
import classnav from './Navbar.module.css';
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className= {classnav.nav}>
        <div className = {classnav.item}>
          <NavLink to= "/main" activeClassName = {classnav.active}>Main</NavLink >
        </div>
        <div className = {classnav.item}>
          <NavLink to= "/profile" activeClassName = {classnav.active}>Profile</NavLink>
        </div>
        <div className = {classnav.item}>
          <NavLink to= "/settings" activeClassName = {classnav.active}>Settings</NavLink> 
        </div>
      </nav>
  );
}

export default Navbar