import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import NavPills from '../components/nav-pills';

class Layout extends Component {
  constructor() {
    super();
    window.store.subscribe(() => this.forceUpdate());
  }

  render() {
    return(
      <HashRouter>
        <div id="layout-root">
          <header>
            <h1>
              <NavLink to="/">10,000 Hours</NavLink>
            </h1>
            <NavPills />
          </header>
          <div className="main-content">
            { this.props.children }
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Layout;
