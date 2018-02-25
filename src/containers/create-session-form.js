import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import APIRequest from '../api/api';
import formStateChange from '../util/form-state';

import momentDurationFormatSetup from 'moment-duration-format';
import { durationToSeconds } from '../util/formatting';

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
        'time_spent': durationToSeconds(this.state.time_spent),
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
