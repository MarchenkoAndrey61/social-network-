import React from 'react';
import SingUp from './sign_in';
import {setEmailText, setPasswordText, setpasswrod_confirmationText,setfirst_nameText, setlast_nameText} from '../../../Redux/Store/registration /actions';
import {connect} from "react-redux";

 class SingUpContainer extends React.Component {
  render(){
    return(
        <SingUp
                                 emai  = {this.props.email}
                             password  = {this.props.password}
                passwrod_confirmation  = {this.props.passwrod_confirmation}
                            first_name = {this.props.first_name}
                            last_name  = {this.props.last_name}
                          setEmailText = {this.props.setEmailText}
                       setPasswordText = {this.props.setPasswordText}
          setpasswrod_confirmationText = {this.props.setpasswrod_confirmationText}
                     setfirst_nameText = {this.props.setfirst_nameText}
                      setlast_nameText = {this.props.setlast_nameText}
            
        />
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.registration.email,
    password: state.registration.password,
    passwrod_confirmation : state.registration.passwrod_confirmation,
    first_name:state.registration.first_name ,
    last_name:state.registration.last_name
  };
};

const mapDispatchToProps = {
    setEmailText,
    setPasswordText,
    setpasswrod_confirmationText,
    setfirst_nameText,
    setlast_nameText
    
}

export default connect (mapStateToProps, mapDispatchToProps) (SingUpContainer);

