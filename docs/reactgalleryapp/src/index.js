import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css'

import apiKey from './config.js'
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components'
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import Photo from './Components/Photo';

ReactDOM.render(
    <App />,  
    document.getElementById('root')
);
