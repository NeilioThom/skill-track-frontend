import React from 'react';
import NavSidebar from '../components/nav-sidebar';
import CreateSkillFormContainer from '../containers/create-skill-form';

const CreateSkillPage = (props) => {
    return(
      <div className="page create-skill">
        <NavSidebar />
        <section className="main panel coloured">
          <h1>Create a Skill</h1>
          <p className="display-text">By creating a skill, you can track your progress on the road to mastery. For now, let's give your skill a name and a weekly goal that you're aiming to hit.</p>
          <CreateSkillFormContainer />
        </section>
      </div>
    )
}

export default CreateSkillPage;
