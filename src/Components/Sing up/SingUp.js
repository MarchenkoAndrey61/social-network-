import React from 'react';
import sing from './SingUp.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class SingUp extends React.Component {

  constructor(props){
    super(props);
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
  }

  onUserNameChange(event){
    this.props.setUserNameText(event.target.value);
  }

  onEmailChange(event){
    this.props.setEmailText(event.target.value);
  }

  onPasswordChange(event){
    this.props.setPasswordText(event.target.value);
  }

  onRepeatPasswordChange(event){
    this.props.setRepeatPasswordText(event.target.value);
  }

    render(){
      return(
        <div>
          <form className={sing.root} noValidate autoComplete="off">
            <div className = {sing.forma}>
              <TextField id="standard-basic" 
                         label="User Name" 
                         type = "text" 
                         name = "username"
                     onChange = {this.onUserNameChange}
                        value = {this.props.username}
              />
              <TextField id="standard-basic"
                        label = "E-mail"
                         type = "text" 
                         name = "login"
                     onChange = {this.onEmailChange}
                        value = {this.props.email}
              />
              <TextField id="standard-basic"
                         label="Password"
                         type = "password" 
                         name = "password"
                     onChange = {this.onPasswordChange}
                        value = {this.props.password}
              />
              <TextField id="standard-basic"
                         label="Confirm Password"
                         type = "password" 
                         name = "password"
                     onChange = {this.onRepeatPasswordChange}
                        value = {this.props.repeatPassword}
              />
            <div className = {sing.btn}> 
                <Button variant="contained" >Enter</Button>
              </div>
            </div>
          </form>
        </div>
      );
    }
}
