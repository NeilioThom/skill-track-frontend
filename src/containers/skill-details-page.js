import { getSkill, getEntries } from '../api/api';
import { Component } from 'react';
import React from 'react';
import SkillDetailsPage from '../pages/skill-details-page';
import moment from 'moment';
import { getWeeklyPercentage } from '../util/formatting';
import queryString from 'query-string';
import clamp from 'clamp';

class SkillDetailsPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: {},
      entries: [],
      currentPage: parseInt(queryString.parse(props.location.search).page, 10) || 1,
      currentPageDate: moment(),
      skillId: props.match.params.id,
      weeklyPercentage: 0
    }

    this.changePage = this.changePage.bind(this);
  }

  updatePageWeek() {
    // Page one should be zero weeks from now: required zero indexing
    let indexedWeekNumber = this.state.currentPage - 1;

    this.setState(
      { currentPageDate: moment().subtract(7 * indexedWeekNumber, 'd') },
    );
  }

  changePage(pageNum) {
    let newPage = clamp(parseInt(pageNum, 10), 1, 100);

    if(this.state.currentPage !== newPage) {
      this.setState({ currentPage: newPage }, () => {
        this.props.history.push(this.props.location.pathname + '?page=' + this.state.currentPage);
        this.updateEntries();
        this.updatePageWeek();
      });
    }
  }

  updateEntries() {
    getEntries(this.state.skillId, this.state.currentPage)
      .then((response) => {
        this.setState({ entries: response.data }, this.updateWeeklyPercentage);
      })
      .catch((error) => console.log(error));
  }

  updateWeeklyPercentage() {
    this.setState({
      weeklyPercentage: getWeeklyPercentage(this.state.skill.weekly_goal, this.state.entries)
    });
  }

  componentWillMount() {
    // Get skill data
    getSkill(this.state.skillId)
      .then((response) => {
        this.setState({ skill: response.data },
          () => {
            this.updateEntries();
            this.updatePageWeek();
          }
        )
      })
      .catch((response) => console.log(response));
  }

  render() {
    return(
      <SkillDetailsPage
        skill={ this.state.skill }
        entries={ this.state.entries }
        currentPage={ this.state.currentPage }
        currentPageDate={ this.state.currentPageDate }
        changePage={ this.changePage }
        weeklyPercentage={ this.state.weeklyPercentage }
      />
    )
  }
}

export default SkillDetailsPageContainer;
