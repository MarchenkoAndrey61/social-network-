import React from 'react';
import sing from './SingUp.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class SingUp extends React.Component {
  state = { 
    email: '',
    password: '',
    passwrod_confirmation: '',
    first_name: '',
    last_name: ''
  }

  onBtnClick = () => {  
    fetch('https://postify-api.herokuapp.com/auth', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    this.setState({ 
      email: '',
      password: '',
      passwrod_confirmation: '',
      first_name: '',
      last_name: ''
    })
    
  }

  constructor(props){
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onpasswrod_confirmationChange = this.onpasswrod_confirmationChange.bind(this);
    this.onfirst_nameChange = this.onfirst_nameChange.bind(this);
    this.onlast_nameChange = this.onlast_nameChange.bind(this);
  }

  onEmailChange(event){
    this.props.setEmailText(event.target.value);
    const { name, value } = event.currentTarget
    this.setState({ [name]: event.currentTarget.value })
  }

  onPasswordChange(event){
    this.props.setPasswordText(event.target.value);
    const { name, value } = event.currentTarget
    this.setState({ [name]: event.currentTarget.value })
  }

  onpasswrod_confirmationChange(event){
    this.props.setpasswrod_confirmationText(event.target.value);
    const { name, value } = event.currentTarget
    this.setState({ [name]: event.currentTarget.value })
  }
  onfirst_nameChange(event){
    this.props.setfirst_nameText(event.target.value);
    const { name, value } = event.currentTarget
    this.setState({ [name]: event.currentTarget.value })
  }
  onlast_nameChange(event){
    this.props.setlast_nameText(event.target.value);
    const { name, value } = event.currentTarget
    this.setState({ [name]: event.currentTarget.value })
  }

    render(){
      return(
        <div>
          <form className={sing.root} noValidate autoComplete="off">
            <div className = {sing.forma}>

              <TextField id="standard-basic"
                        label = "E-mail"
                         type = "text" 
                         name = ""
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
                     onChange = {this.onpasswrod_confirmationChange}
                        value = {this.props.passwrod_confirmation}
              />
              <TextField id="standard-basic"
                         label="First Name"
                         type = "text" 
                         name = "first_name"
                     onChange = {this.onfirst_nameChange}
                        value = {this.props.first_name}
              />
              <TextField id="standard-basic"
                         label="Last Name"
                         type = "text" 
                         name = "last_name"
                     onChange = {this.onlast_nameChange}
                        value = {this.props.last_name}
              />
            <div className = {sing.btn}> 
                <Button onClick={this.onBtnClick} variant="contained" >Enter</Button>
              </div>
            </div>
          </form>
        </div>
      );
    }
}
