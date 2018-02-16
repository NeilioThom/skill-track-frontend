import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import clamp from 'clamp';
import APIRequest from '../util/api';
import { durationToFormattedMoment } from '../util/time';
import { NavLink } from 'react-router-dom';
import ProgressBar from './progress-bar';

class SkillsList extends Component {
  constructor(props) {
    super(props);

    this.state = { skills: [] };
    this.skillCard = this.skillCard.bind(this);
  }

  componentWillMount() {
    new APIRequest({
      url: 'http://localhost:8000/skills/',
      method: "GET"
    })
    .then((response) => this.setState({ skills: response.data }))
    .catch((response) => console.log(response))
  }

  getWeeklyPercentage(item) {
    return(item.entries.length > 0
      ? clamp(item.entries.reduce((total, current) => total + current.time_spent, 0) / item.weekly_goal * 100, 0, 100)
      : 0
    );
  }

  skillCard(item, key) {
    return(
      <article>
        <header>
          <h3 className="col-8">
            <a href="#">
              { item.name }
            </a>
          </h3>
          <p className="col-4 text-right">
            { moment(item.created_date).format("DD/MM/YYYY") }
          </p>
        </header>
        <ProgressBar percentage={ this.getWeeklyPercentage(item) } text={ this.getWeeklyPercentage(item) + "%" } />
        <hr />
      </article>
    );
  }

  render() {
    return(
      <div className="skills-list">
        { this.state.skills.map(this.skillCard) }
      </div>
    )
  }
}

export default withRouter(SkillsList);
