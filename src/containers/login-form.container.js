import React from 'react';
import Cookies from 'js-cookie';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from '../components/login-form';
import formStateChange from '../util/form-state';
import APIRequest from '../api/api';
import { login } from '../actions/actions';

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = { username: "", password: "", formErrors: { } }
  }

  onChange(e) {
    formStateChange(this, e);
  }

  onSubmit(e) {
    e.preventDefault();
    var self = this;

    APIRequest('auth/', {
      method: "POST",
      data: self.state
    })
    .then((response) => {
      if(response.status == 200) {
        window.store.dispatch(login({ username: response.data.username }));
        self.props.history.push('/');
      }
    })
    .catch((error) => {
      console.log(error);
      self.setState({ formErrors: error.response.data });
    });
  }

  render() {
    return(<LoginForm onChange={this.onChange} formErrors={this.state.formErrors} onSubmit={this.onSubmit} />)
  }
}

export default withRouter(LoginFormContainer);
