import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import NavSidebar from '../components/nav-sidebar';
import ReadMoreText from '../components/read-more-text';
import ProgressBar from '../components/progress-bar';
import { durationToMoment } from '../util/formatting';

const SkillDetailsPage = (props) => {
  return(
    <div className="page skill-details">
      <NavSidebar />
      <div className="main panel coloured">
        <header>
          <hgroup>
            <h1>{ props.skill.name }</h1>
            <h2 className="subheading">
              { durationToMoment(props.skill.total_time_spent).format('h') } hours logged since { moment(props.skill.created_date).format('DD/MM/YYYY') }
            </h2>
            <h3 className="subheading">
              Current target: { moment(props.skill.weekly_goal).format('h') } hours per week
            </h3>
          </hgroup>
          <div className="actions-menu">
            <button className="dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Actions
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <NavLink to={"/skills/" + props.skill.id + "/sessions/create"}>Add a Session</NavLink>
              <NavLink to={"/skills/" + props.skill.id + "/edit"}>Edit Skill</NavLink>
              <a href="" className="danger">Delete Skill</a>
            </div>
          </div>
        </header>

        <hgroup className="date-changer-group">
          <h2>Progress by Week</h2>
          <div className="date-changer">
            <button onClick={(e) => props.changePage(props.currentPage + 1)}>&#171;</button>
            <h3 className="subheading">
              Week { props.currentPageDate.format('w, YYYY') }
            </h3>
            <button className="btn-date-change" onClick={(e) => props.changePage(props.currentPage - 1)}>&#187;</button>
          </div>
        </hgroup>

        <div className="panel-section">
          <h3>Weekly Goal</h3>
          <ProgressBar
            percentage={ props.weeklyPercentage }
            text={ props.weeklyPercentage + "%" }
          />
        </div>
        
        <div className="panel-section">
          <h3>Logged Sessions</h3>
          <div className="col entries">
            { (props.entries.length > 0)
              ? props.entries.map((entry, index) => {
                return(
                  <article className="entry" key={index}>
                    <div className="text">
                      <h4>{ moment(entry.created_date).format('dddd, MMMM Do') }</h4>
                      <p>{ <ReadMoreText text={entry.comment} limit="200" /> }</p>
                    </div>
                    <div className="time">
                      <h5>{ durationToMoment(entry.time_spent).format('HH[h] mm[m]', { trim: false }) }</h5>
                    </div>
                  </article>
                )})
              : <p className="display-text">You haven't logged any sessions on this week.</p>
            }
          </div>
        </div>
        <div className="panel-section">
          <h3>Progress by Month</h3>
          <div className="calendar">
            <ul className="days">
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thur</li>
              <li>Fri</li>
              <li>Sat</li>
              <li>Sun</li>
            </ul>
            <ul className="dates">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillDetailsPage;
