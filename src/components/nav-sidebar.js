import React from 'react';
import { NavLink } from 'react-router-dom';

const NavSidebar = (props) => {
  return(
    <ul className="nav flex-column">
      <li class="nav-item">
        <NavLink to="/skills/create/">
          <i className="fas fa-plus" style={{"margin-right": "1.4em"}}></i>
          New Skill
        </NavLink>
      </li>
      <li class="nav-item">
        <a href="#">
          <i className="fas fa-chart-line" style={{"margin-right": "1.4em"}}></i>
          Statistics
        </a>
      </li>
    </ul>
  );
}

export default NavSidebar;
