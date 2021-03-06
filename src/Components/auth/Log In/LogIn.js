import React from 'react';
import Log from './LogIn.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router';

export default class LogIn extends React.Component{
  
  state = { 
    email: '',
    password: '',
    redirect: false
  }

  onBtnClick = () => { 

    fetch('https://postify-api.herokuapp.com/auth/sign_in', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',     
      }
    }).then(response => {
      localStorage.setItem('Access-Token', response.headers.get('Access-Token'));
      localStorage.setItem('Client', response.headers.get('Client'));
      localStorage.setItem('Uid', response.headers.get('Uid'));
    }).then(() => this.setState({ redirect: true }));

    this.setState({ 
      email: '',
      password: ''
    })    
  }

  constructor(props){
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(event){
    this.props.setEmailText(event.target.value);
    const { name, value } = event.currentTarget
    this.setState({ [name]: event.currentTarget.value })
  };

  onPasswordChange(event){
    this.props.setPasswordText(event.target.value);
    const { name, value } = event.currentTarget
    this.setState({ [name]: event.currentTarget.value })
  }

  render(){
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/main'/>;
    }
        return(
          <div>
            <form className={Log.root} noValidate autoComplete="off">
              <div className = {Log.forma}>
                <TextField id="standard-basic" 
                           label="E-mail" 
                           type = "text" 
                           name = "email" 
                           value = {this.props.email}
                           onChange = {this.onEmailChange}
                           maxlength= "15"
                />
                <TextField id="standard-basic" 
                           label="Password" 
                           type = "password" 
                           name = "password" 
                           value = {this.props.password}
                           onChange = {this.onPasswordChange}
                           maxlength= "15"
                />
                <div className = {Log.btn}> 
                  <Button onClick={this.onBtnClick} variant="contained" >Enter</Button>
                </div>
              </div>
            </form>
          </div>
        );
  }
}






