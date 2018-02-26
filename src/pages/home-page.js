import React, { Component } from 'react';
import SkillsList from '../components/skills-list';
import NavSidebar from '../components/nav-sidebar';

class HomePage extends Component {
  render() {
    return(
      <div className="page home">
        <NavSidebar />
        <section className="main panel coloured">
          <h1>Your Progress This Week</h1>
          <h2>Skills</h2>
          <SkillsList />
        </section>
      </div>
    )
  }
}

export default HomePage;
