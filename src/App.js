import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Profile from './Components/Profile/profile';
import SingUp from './Components/Sing up/SingUp';
import LogIn from './Components/Log in/LogIn';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'typeface-roboto';

function App(props) {

  return (
    <BrowserRouter> 
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div class = "app-wrapper-content">
            <Route path = '/main' render ={ () => <Main posts={props.state.mainPage.posts }/> }/>
            <Route path = '/profile' render ={ () => <Profile/> }/>
            <Route path = '/settings' render ={ () => <Settings/> }/>
            <Route path = '/sing_up' render ={ () => <SingUp/>} />
            <Route path = '/log_in' render = {() => <LogIn/>} />
          </div>
        </div> 
    </BrowserRouter> 
  );
}

export default App;
