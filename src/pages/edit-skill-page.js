import React from 'react';
import NavSidebar from '../components/nav-sidebar';
import SkillFormContainer from '../containers/skill-form';

const EditSkillPage = (props) => {
    return (
        <div className="page edit-skill">
            <NavSidebar />
            <section className="main panel coloured">
                <h1>Edit a Skill</h1>
                <p className="display-text">
                    You are free to edit your skill at any time.
                </p>
                <SkillFormContainer />
            </section>
        </div>
    )
}

export default EditSkillPage;
