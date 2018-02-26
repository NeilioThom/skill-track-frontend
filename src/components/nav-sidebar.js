import React from 'react';
import { NavLink } from 'react-router-dom';
import getUserData from '../util/store';

const NavSidebar = (props) => {
  return(
    <section className="nav-sidebar panel">
      <h1>{getUserData().username}</h1>
      <ul className="nav-sidebar">
        <li>
          <NavLink to="/skills/create/">
            <i className="fas fa-paint-brush"></i> Add a Skill
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills/create/">
            <i className="fas fa-calendar"></i> Add a Habit
          </NavLink>
        </li>
        <li>
          <a href="">
            <i className="fas fa-chart-line"></i> Statistics
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavSidebar;
