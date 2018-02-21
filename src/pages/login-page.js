import React, { Component } from 'react';
import LoginFormContainer from '../containers/login-form.container';

const LoginPage = (props) => {
  return(
    <div class="login page col-6">
      <div class="main panel coloured">
        <h1>Log In</h1>
        <LoginFormContainer />
      </div>
    </div>
  )
}

export default LoginPage;
