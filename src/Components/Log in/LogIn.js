import React from 'react';
import Log from './LogIn.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class LogIn extends React.Component{

  constructor(props){
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(event){
    this.props.setEmailText(event.target.value);
  };

  onPasswordChange(event){
    this.props.setPasswordText(event.target.value);
  }


  render(){
        return(
          <div>
            <form className={Log.root} noValidate autoComplete="off">
              <div className = {Log.forma}>
                <TextField id="standard-basic" 
                           label="E-mail" 
                           type = "text" 
                           name = "login" 
                           value = {this.props.email}
                           onChange = {this.onEmailChange}
                />
                <TextField id="standard-basic" 
                           label="Password" 
                           type = "password" 
                           name = "password" 
                           value = {this.props.password}
                           onChange = {this.onPasswordChange}
                />
                <div className = {Log.btn}> 
                  <Button variant="contained" >Enter</Button>
                </div>
              </div>
            </form>
          </div>
        );
  }
}






