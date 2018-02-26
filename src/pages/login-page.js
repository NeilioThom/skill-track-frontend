import React from 'react';
import LoginFormContainer from '../containers/login-form';

const LoginPage = (props) => {
  return(
    <div className="login page">
      <div className="main panel coloured">
        <h1>Log In</h1>
        <LoginFormContainer />
      </div>
    </div>
  )
}

export default LoginPage;
