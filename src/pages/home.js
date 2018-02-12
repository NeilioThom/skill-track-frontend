import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SkillsList from '../components/skills-list';

class Home extends Component {
  render() {
    return(
      <div className="page-home">
        <div class="panel">
          <div class="container">
            <div class="content">
              <h1 class="text-center">Your Skills</h1>
              <SkillsList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
