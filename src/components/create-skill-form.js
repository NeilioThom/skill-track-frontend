import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import APIRequest from '../util/api';

class CreateSkillForm extends Component {
  constructor(props) {
    super(props);

    // Bind events to this object
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      name: ''
    }
  }

  // POST to skills endpoint with form data
  onSubmit(e) {
    e.preventDefault();
    var request = this.state;
    var self = this;

    new APIRequest({
      url: 'http://localhost:8000/skills/',
      method: 'POST',
      data: {
        name: this.state.name
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
          <div class="form-group">
            <label class="col-form-label col-form-label-lg" for="add-skill-name">Skill Name:</label>
            <input class="form-control form-control-lg" type="text" name="name" onChange={this.onChange} />
          </div>
          <input type="submit" class="form-control" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(CreateSkillForm);
