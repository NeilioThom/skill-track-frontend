import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/actions';

const SidebarMenuMobile = (props) => {
  return(
    <nav className="sidebar-menu-mobile">
      <button className="close">x</button>
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/"><li>Register</li></NavLink>
        <NavLink to="/"><li>Log In</li></NavLink>
      </ul>
    </nav>
  )
}

const PillsBasedOnAuth = (props) => {
  if (!window.store.getState().userData.isAuthenticated) {
    return (
      <div>
        <SidebarMenuMobile />
        <ul className="pills">
          <li><a className="nav-link" href="">Home</a></li>
          <li><a className="nav-link" href="">About</a></li>
          <li><a className="nav-link" href="">Register</a></li>
          <li><NavLink to="/login/" className="nav-link">Log In</NavLink></li>
        </ul>
      </div>
    )
  } else {
    return (
      <ul className="pills">
        <li>
          <a className="nav-link" onClick={() => window.store.dispatch(logout())}>Log Out</a>
        </li>
      </ul>
    )
  }
}

const NavPills = (props) => {
  return <PillsBasedOnAuth />
}

export default withRouter(NavPills);
