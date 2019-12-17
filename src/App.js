import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Profile from './Components/Profile/profile';

import Settings from './Components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter> 
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div class = "app-wrapper-content">
            <Route path = '/main' component = {Main}/>
            <Route path = '/profile' component = {Profile}/>
            <Route path = '/settings' component = {Settings}/>
          </div>
        </div> 
    </BrowserRouter> 
  );
}

export default App;
