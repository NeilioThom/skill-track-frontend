import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import NavSidebar from '../components/nav-sidebar';
import EntriesList from '../components/entries-list';
import { durationToMoment } from '../util/formatting';

const SkillDetailsPage = (props) => {
  return(
    <div className="page skill-details">
      <NavSidebar />
      <div className="main panel coloured">

        <header className="wrapper">
          <hgroup>
            <h1>{ props.skill.name }</h1>
            <h2 className="subheading">
              { durationToMoment(props.skill.total_time_spent).format('h') } hours logged since { moment(props.skill.created_date).format('DD/MM/YYYY') }
            </h2>
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
    
        <div className="wrapper">
          <EntriesList entries={ props.entries } />
        </div>
        <div className="date-changer">
            <div className="date-changer-controls">
              <button onClick={(e) => props.changePage(props.currentPage + 1)} data-toggle="tooltip" data-placement="top" title="Previous Week">&#171;</button>
              <p className="subheading">
                Week { props.currentPageDate.format('w, YYYY') }
              </p>
              <button className="btn-date-change" onClick={(e) => props.changePage(props.currentPage - 1)} data-toggle="tooltip" data-placement="top" title="Next Week">&#187;</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SkillDetailsPage;
