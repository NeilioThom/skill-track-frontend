import React, { Component } from 'react';
import CreateSkillForm from '../components/create-skill-form';

class CreateSkillPage extends Component {
  render() {
    return(
      <section class="create-skill-page">
        <div class="container">
          <div class="page-title container mb-0">
            <h2 className="page-title col align-self-center">Create a Skill</h2>
          </div>
        </div>
        <section class="content-section">
          <div class="container">
            <div class="col-md-6 offset-md-3">
              <CreateSkillForm />
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default CreateSkillPage;
