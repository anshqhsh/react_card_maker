import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';

const authService = new AuthService(); //App에 전달 
ReactDOM.render(
  <React.StrictMode>
    <App authService = {authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);
