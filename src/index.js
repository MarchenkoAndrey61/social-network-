import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import state from './Redux/state';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


ReactDOM.render(<App state = {state}/>,
                document.getElementById('root'));


serviceWorker.unregister();
