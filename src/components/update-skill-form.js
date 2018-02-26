import React from 'react';
import { withRouter } from 'react-router-dom';

const UpdateSkillForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit} id="update-skill">
        <div className="form-group">
          <label htmlFor="skill-name">Skill Name:</label>
          <input type="text" name="name" onChange={props.onChange} />
          <label htmlFor="weekly_goal">Weekly Goal:</label>
          <input type="time" name="weekly_goal" onChange={props.onChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default withRouter(UpdateSkillForm);
