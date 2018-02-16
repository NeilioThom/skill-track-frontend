import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SkillsList from '../components/skills-list';
import NavSidebar from '../components/nav-sidebar';
import getUserData from '../util/store';

class Home extends Component {
  render() {
    return(
      <div className="page-home">
        <section className="panel col-3">
          <h1>{getUserData().username}</h1>
          <h4>0 hours logged this week.</h4>
          <NavSidebar />
        </section>
        <section className="panel coloured col-9">
          <h1 className="text-center">Your Skills</h1>
          <SkillsList />
        </section>
      </div>
    )
  }
}

export default Home;
