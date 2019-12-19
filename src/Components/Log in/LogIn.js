import React from 'react';
import Log from './LogIn.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const LogIn = () => {
  return(
    <div>
      <form className={Log.root} noValidate autoComplete="off">
        <div className = {Log.forma}>
          <TextField id="standard-basic" label="E-mail" />
          <TextField id="standard-basic" label="Password" />
          <div className = {Log.btn}> 
            <Button variant="contained" >Enter</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn




