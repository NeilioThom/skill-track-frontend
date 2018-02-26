import React from 'react';
import { withRouter } from 'react-router-dom';

const CreateSkillForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit} id="add-skill">
        <div className="form-group">
          <label htmlFor="add-skill-name">Skill Name:</label>
          <input type="text" name="name" placeholder={props.name} onChange={props.onChange} />
          <label htmlFor="weekly_goal">Weekly Goal:</label>
          <input type="time" name="weekly_goal" min="00:15" max="100:00" placeholder={props.weekly_goal} onChange={props.onChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default withRouter(CreateSkillForm);
