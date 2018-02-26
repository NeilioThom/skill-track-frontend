import React from 'react';
import NavSidebar from '../components/nav-sidebar';
import CreateSessionFormContainer from '../containers/create-session-form';


const CreateSessionPage = (props) => {
  return (
    <div className="page skill-details">
      <NavSidebar />

      <section className="main panel coloured">
        <h1>Log a Session</h1>
        <p className="display-text">
          Keep track of each session you spend working on your new skill.
        </p>
        <CreateSessionFormContainer />
      </section>
    </div>
  );
}

export default CreateSessionPage;
