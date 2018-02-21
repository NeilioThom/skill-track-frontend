import React from 'react';
import { Component } from 'react';

import SkillDetailsPage from '../pages/skill-details-page';
import APIRequest from '../api/api';

class SkillDetailsPageContainer extends Component {
  constructor() {
    super();
    this.state = { skill: { entries: [] } }
  }

  componentWillMount() {
    APIRequest('skills/' + this.props.match.params.id, { method: "GET" })
      .then((response) => this.setState({ skill: response.data }))
      .catch((response) => console.log(response))
  }

  render() {
    return(
      <SkillDetailsPage skill={ this.state.skill } />
    )
  }
}

export default SkillDetailsPageContainer;
