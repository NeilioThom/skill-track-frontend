import React from 'react';
import moment from 'moment';

import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import CreateSkillForm from '../components/create-skill-form';
import NavSidebar from '../components/nav-sidebar';
import ReadMoreText from '../components/read-more-text';
import ProgressBar from '../components/progress-bar';

import { getWeeklyPercentage, durationToMoment } from '../util/formatting';

const SkillDetailsPage = (props) => {
  return(
    <div className="page skill-details">
      <NavSidebar />

      <div className="main panel coloured">
        <header>
          <hgroup>
            <h1>{ props.skill.name }</h1>
            <h2 className="subheading">{ durationToMoment(props.skill.total_time_spent).format('h') } hours logged since { moment(props.skill.created_date).format('DD/MM/YYYY') }</h2>
          </hgroup>
          <div className="actions-menu">
            <button className="dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Actions
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <NavLink to={"/skills/" + props.skill.id + "/sessions/create"}>Add a Session</NavLink>
              <NavLink to={"/skills/" + props.skill.id + "/sessions/create"}>Change Weekly Goal</NavLink>
              <a href="#" className="danger">Delete Skill</a>
            </div>
          </div>
        </header>

        <div className="panel-section">
          <h2>Progress this Week</h2>
          <ProgressBar
            percentage={ getWeeklyPercentage(props.skill) }
            text={ props.skill.total_time_spent }
          />
        </div>

        <div className="panel-section">
          <h2>Recent Sessions</h2>

          <table className="skill-details">
            <thead>
              <th>Date</th>
              <th>Time Spent</th>
              <th>Comment</th>
            </thead>
            <tbody>
            { props.skill.entries.map((entry) => {
              return(
                <tr>
                  <td>{ moment(entry.created_date).format("dddd") } { moment(entry.created_date).format("DD/MM/YYYY") }</td>
                  <td>{ durationToMoment(entry.time_spent).format('hh:mm', { trim: false }) }</td>
                  <td><ReadMoreText limit="100" text={ entry.comment } /></td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default SkillDetailsPage;
