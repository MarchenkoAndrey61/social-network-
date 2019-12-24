import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Profile from './Components/Profile/profile';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import { createStore } from '../../../Library/Caches/typescript/3.6/node_modules/redux';
import rootReducer from './Redux/Store/reducers';
import { Provider } from 'react-redux';
import LogContainer from './Components/auth/Log In/LogContainer';
import SingUpContainer from './Components/auth/Sing Up/RegContainer';

const store = createStore (rootReducer); 
 
function App(props) {
  
    return (
      <Provider store = {store}>
        <BrowserRouter> 
            <div className= "app-wrapper" >
              <Header />
              <Navbar />
              <div class = "app-wrapper-content">
                <Route path = '/main' render ={ () => <Main posts={props.state.mainPage.posts }/> }/>
                <Route path = '/profile' render ={ () => <Profile/> }/>
                <Route path = '/settings' render ={ () => <Settings/> }/>
                <Route path = '/auth' render ={ () => <SingUpContainer/>} />
                <Route path = '/sign_in' render = {() => <LogContainer/>} />
              </div>
            </div> 
        </BrowserRouter> 
      </Provider>
    )
  
}

export default App;
