import React, { Component } from 'react';
import NavSidebar from '../components/nav-sidebar';
import CreateSkillFormContainer from '../containers/create-skill-form';

const CreateSkillPage = (props) => {
    return(
      <div className="page create-skill">
        <NavSidebar />
        <section className="main panel coloured">
          <h1>Create a Skill</h1>
          <CreateSkillFormContainer />
        </section>
      </div>
    )
}

export default CreateSkillPage;
