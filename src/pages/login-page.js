import React, { Component } from 'react';
import LoginFormContainer from '../containers/login-form';

const LoginPage = (props) => {
  return(
    <div class="login page">
      <div class="main panel coloured">
        <h1>Log In</h1>
        <LoginFormContainer />
      </div>
    </div>
  )
}

export default LoginPage;
