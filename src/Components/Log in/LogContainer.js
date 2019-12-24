import React from 'react';
import LogIn from './LogIn';
import {connect} from 'react-redux';
import {setEmailText, setPasswordText} from "../../Redux/Store/login/actions"

class LogContainer extends React.Component{
  render(){
        return(
          <div>
            <LogIn email ={this.props.email}
                   password = {this.props.password}
                   setEmailText = {this.props.setEmailText}
                   setPasswordText = {this.props.setPasswordText}
            />
          </div>
        );
  }
}

const mapStateToProps = state => {
    return {
      email: state.login.email,
      password: state.login.password
    };
}

const mapDispatchToProps =  {
  setEmailText,
  setPasswordText 
}

export default connect(mapStateToProps,mapDispatchToProps) (LogContainer);