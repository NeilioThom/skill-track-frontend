import React from 'react';
import { withRouter } from 'react-router-dom';

const CreateSkillForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit} id="add-skill">
        <div className="form-group">
          <label htmlFor="add-skill-name" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Skill Name:</label>
          <input type="text" name="name" onChange={props.onChange} />
          <label htmlFor="weekly_goal">Weekly Goal:</label>
          <input type="time" name="weekly_goal" onChange={props.onChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default withRouter(CreateSkillForm);
