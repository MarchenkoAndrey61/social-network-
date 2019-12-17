import React from 'react';
import infostyle from "./MainInfo.module.css";

const MainInfo = () => {
  return ( 
       <div >
        <div className = {infostyle.backImage}>
          <div className = {infostyle.logo}>
              <img src="https://retohercules.com/images/dell-logo-transparent-11.png"  alt = "logo"/>
          </div>
          <div className = {infostyle.text}>
              <h1> The Social Network </h1>
              <h1> of your life...... </h1>
          </div>
        </div>
       
     
    </div>
  );
}

export default MainInfo