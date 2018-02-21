import React from 'react';
import { NavLink } from 'react-router-dom';
import getUserData from '../util/store';

const NavSidebar = (props) => {
  return(
    <section className="nav-sidebar panel col-3 col-md-0">
      <h1>{getUserData().username}</h1>
      <h4>0 hours logged this week.</h4>
      <ul className="nav-sidebar">
        <li>
          <NavLink to="/skills/create/">
            <i className="fas fa-plus"></i> New Skill
          </NavLink>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-chart-line"></i> Statistics
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavSidebar;
