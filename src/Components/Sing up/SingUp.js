import React from 'react';
import sing from './SingUp.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SingUp = () =>{
  return(
    <div>
      <form className={sing.root} noValidate autoComplete="off">
        <div className = {sing.forma}>
          <TextField id="standard-basic" label="User Name" />
          <TextField id="standard-basic" label="E-mail" />
          <TextField id="standard-basic" label="Password" />
          <TextField id="standard-basic" label="Confirm Password" />
          <div className = {sing.btn}> 
            <Button variant="contained" >Enter</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SingUp