import React, { Component } from 'react';
import LoginForm from '../components/login';

class LoginPage extends Component {
  render() {
    return(
      <div class="login-page">
        <div class="container">
          <div class="col-md-8 offset-md-2 panel">
            <div class="content">
              <h1>
                  Log In
              </h1>
            </div>
            <hr />
            <div class="content">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;
