import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import APIRequest from '../api/api';
import { NavLink } from 'react-router-dom';

class SkillsList extends Component {
  constructor(props) {
    super(props);

    this.state = { skills: [] };
    this.skillCard = this.skillCard.bind(this);
  }

  componentWillMount() {
    APIRequest('skills/', { method: 'GET' })
      .then((response) => this.setState({ skills: response.data }))
      .catch((response) => console.log(response))
  }

  skillCard(item, index) {
    return(
      <article key={index}>
        <header>
          <h3 className="col-8">
            <NavLink to={"/skills/" + item.id}>
              { item.name }
            </NavLink>
          </h3>
          <p className="col-4 text-right">
            { moment(item.created_date).format("DD/MM/YYYY") }
          </p>
        </header>
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
