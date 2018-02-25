import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import APIRequest from '../api/api';

const CreateSkillForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit} id="add-skill">
        <div className="form-group">
          <label for="add-skill-name">Skill Name</label>
          <input type="text" name="name" onChange={props.onChange} />
          <label for="weekly-goal">Weekly Goal (Hours)</label>
          <input type="text" name="weekly_goal" onChange={props.onChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default withRouter(CreateSkillForm);
