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
        <div className="layout">
          <header className="container">
            <div class="row">
              <div class="col-lg col-md col-sm-12">
                <h1>
                  <NavLink to="/">Skill Tracker</NavLink>
                </h1>
              </div>
              <div class="col-lg col-md-12 col-sm-12 align-self-center">
                <NavPills />
              </div>
            </div>
          </header>
          <div className="content">
            { this.props.children }
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Layout;
