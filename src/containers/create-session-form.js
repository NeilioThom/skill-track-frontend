import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import APIRequest from '../api/api';
import formStateChange from '../util/form-state';
import { covertTimeToSeconds } from '../util/formatting';
import CreateSessionForm from '../components/create-session-form';

class CreateSessionFormContainer extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = { skill: this.props.match.params.id };
  }

  onChange(e) {
    formStateChange(this, e);
  }

  onSubmit(e) {
    e.preventDefault();
    var self = this;

    APIRequest('skills/' + this.state.skill + '/entries/', {
      method: 'POST',
      data: {
        'created_date': this.state.created_date,
        'time_spent': covertTimeToSeconds(this.state.time_spent),
        'comment': this.state.comment
      }
    })
      .then((response) => self.props.history.push('/skills/' + this.state.skill + '/'))
      .catch((response) => console.log(response))
  }

  render() {
    return (<CreateSessionForm onChange={this.onChange} onSubmit={this.onSubmit} />)
  }
}

export default withRouter(CreateSessionFormContainer);
