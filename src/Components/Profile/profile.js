import React from 'react';
import profstyle from "./profile.module.css"
import profileInfo from './ProfileInfo/profileInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyPosts from '../Main/Myposts/MyPosts';

class Profile extends React.Component {
  componentWillMount(){
    fetch('https://postify-api.herokuapp.com/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': localStorage.getItem('Access-Token'),
        'Client': localStorage.getItem('Client'),
        'Uid': localStorage.getItem('Uid'),
      }
    }).then(response => {
      return response.json()
    }).then(response => {
      this.setState({
        email: response.email,
        firs_name: response.firs_name,
        last_name: response.last_name,
      })
    })
  }
  render() {
    return (
      <div>
        <div className = {profstyle.mainContent}>
          <div className = {profstyle.logo}>
            <img src = "https://cq.ru/wp-content/uploads/2019/08/avatarka-58.jpg"
                alt = "avataka"
            /> 
            <div className = {profstyle.desc}>
              <div>
                  <h3>UserName</h3>
              </div>
              <div>
                <h4>E-mail</h4>
              </div>
              <div>
                <h3>publications :</h3>
              </div>
            </div>
            <profileInfo />    
          </div>
        </div>
        <h1>Your Post:</h1>
        
      </div>
      
    );
  }
  
} 

export default Profile


