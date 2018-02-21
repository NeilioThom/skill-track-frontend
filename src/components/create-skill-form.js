import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import APIRequest from '../api/api';

class CreateSkillForm extends Component {
  constructor(props) {
    super(props);

    // Bind events to this object
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      name: '',
      weekly_goal: 0
    }
  }

  // POST to skills endpoint with form data
  onSubmit(e) {
    e.preventDefault();
    var request = this.state;
    var self = this;

    APIRequest('skills/', {
      method: 'POST',
      data: {
        name: this.state.name,
        weekly_goal: this.state.weekly_goal
      }
    }).then(function(response) {
      if(response.status == 200) {
        self.props.history.push('/');
      }
    });
  }

  // Update state when the form data is changed
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Render form to add a new skill
  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit} id="add-skill">
          <div className="form-group">
            <label for="add-skill-name">Skill Name</label>
            <input type="text" name="name" onChange={this.onChange} />
            <label for="weekly-goal">Weekly Goal (Hours)</label>
            <input type="text" name="weekly_goal" onChange={this.onChange} />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(CreateSkillForm);
