import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Profile from './Components/Profile/profile';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import { createStore } from 'redux';
import rootReducer from './Redux/Store/reducers';
import { Provider } from 'react-redux';
import LogContainer from './Components/auth/Log In/LogContainer';
import SingUpContainer from './Components/auth/Sing Up/RegContainer';
import { connect } from 'react-redux';
import { addPost } from './Redux/Store/posts/actions';
import Post from './Components/specPost/specPost';
const store = createStore (rootReducer); 
 
class App extends React.Component{
  render(){
    const wrapperPost = (props) => {
      return <Post { ...props } data={this.props} onAddComment={this.addComment} />
    }
    console.log(this.props)
    const { post, addPostAction } = this.props
    return(
      <Provider store = {store}>
        <BrowserRouter> 
            <div className= "app-wrapper" >
              <Header />
              <Navbar />
              <div class = "app-wrapper-content">
                <Route path = '/main' render ={ () => <Main data={post} 
                                                            addPost={addPostAction}/> }/>
                <Route path = '/profile' render ={ () => <Profile/> }/>
                <Route path = '/settings' render ={ () => <Settings/> }/>
                <Route path = '/auth' render ={ () => <SingUpContainer/>} />
                <Route path = '/sign_in' render = {() => <LogContainer/>} />
                <Route path='/posts/:post' component={wrapperPost}  />
              </div>
            </div> 
        </BrowserRouter> 
      </Provider>
    )
  }
}

const mapStateToProps = store => {
  return {
    post: store,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPostAction: (title, discription) => dispatch(addPost(title, discription))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
