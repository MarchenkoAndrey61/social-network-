import React from 'react';
import SingUp from './SingUp';
import {setUserNameText, setEmailText, setPasswordText, setRepeatPasswordText} from '../../Redux/Store/registration /actions';
import {connect} from "react-redux";

 class SingUpContainer extends React.Component {
  render(){
    return(
        <SingUp
                      username  = {this.props.username}
                          emai  = {this.props.email}
                      password  = {this.props.password}
                repeatPassword  = {this.props.repeatPassword}
                setUserNameText = {this.props.setUserNameText}
                setEmailText    = {this.props.setEmailText}
                setPasswordText = {this.props.setPasswordText}
          setRepeatPasswordText = {this.props.setRepeatPasswordText}
        />
    );
  }
}

const putStateToProps = state => {
  return {
    username: state.registration.username,
    email: state.registration.email,
    password: state.registration.password,
    repeatPassword : state.registration.repeatPassword
  };
};

const putDispatchToProps = {
    setUserNameText,
    setEmailText,
    setPasswordText,
    setRepeatPasswordText
}

export default connect (putStateToProps, putDispatchToProps) (SingUpContainer);