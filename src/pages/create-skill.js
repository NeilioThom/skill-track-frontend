import React, { Component } from 'react';
import CreateSkillForm from '../components/create-skill-form';

class CreateSkillPage extends Component {
  render() {
    return(
      <div class="create-skill-page">
        <div class="col-md-6 offset-md-3 panel coloured">
          <h1 className="page-title text-center">Create a Skill</h1>
          <CreateSkillForm />
        </div>
      </div>
    )
  }
}

export default CreateSkillPage;
