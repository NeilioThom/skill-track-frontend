import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const PillsBasedOnAuth = () => {
  if(!window.store.getState().userData.isAuthenticated) {
    return(
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Register</a>
        </li>
        <li class="nav-item">
          <NavLink to="/login/" className="nav-link">Log In</NavLink>
        </li>
      </ul>
    )
  } else {
    return(
      <ul class="nav nav-pills">
        <li class="nav-item">
          <NavLink className="nav-link" to="/create-skill/">Add a Skill</NavLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Log Out</a>
        </li>
      </ul>
    )
  }
}

const NavPills = (props) => {
  return <PillsBasedOnAuth />
}

export default withRouter(NavPills);
