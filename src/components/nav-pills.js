import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/actions';

const PillsBasedOnAuth = (props) => {
  if(!window.store.getState().userData.isAuthenticated) {
    return(
      <ul>
        <li>
          <a class="nav-link" href="#">Home</a>
        </li>
        <li>
          <a class="nav-link" href="#">About</a>
        </li>
        <li>
          <a class="nav-link" href="#">Register</a>
        </li>
        <li>
          <NavLink to="/login/" className="nav-link">Log In</NavLink>
        </li>
      </ul>
    )
  } else {
    return(
      <ul>
        <li>
          <a class="nav-link" onClick={ () => window.store.dispatch(logout()) }>Log Out</a>
        </li>
      </ul>
    )
  }
}

const NavPills = (props) => {
  return <PillsBasedOnAuth />
}

export default withRouter(NavPills);
