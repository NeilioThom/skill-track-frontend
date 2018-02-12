import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { login } from '../actions/actions';

axios.defaults.withCredentials = true;

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      username: "",
      password: ""
    }
  }

  onSubmit(e) {
    e.preventDefault();
    var request = this.state;
    var self = this;

    axios({
      url: 'http://localhost:8000/auth/',
      method: "POST",
      headers: { "X-CSRFToken": Cookies.get('csrftoken') },
      data: self.state
    })
    .then((response) => {
      if(response.status == 200) {
        window.store.dispatch(login({ username: response.data.username }));
        self.props.history.push('/');
      }
    })
    .catch((response) => {
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit} id="login">
          <div class="form-group">
            <label class="col-form-label-lg" for="username">Username:</label>
            <input class="form-control form-control-lg" type="text" name="username" onChange={this.onChange} />
          </div>
          <div class="form-group">
            <label class="col-form-label-lg" for="password">Password:</label>
            <input class="form-control form-control-lg" type="password" name="password" onChange={this.onChange} />
          </div>
          <input type="submit" class="form-control btn-lg btn btn-success" value="Log In" />
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
