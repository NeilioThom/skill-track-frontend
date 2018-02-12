import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import APIRequest from '../util/api';
import moment from 'moment';
import { durationToFormattedMoment } from '../util/time';
import { NavLink } from 'react-router-dom';

class SkillsList extends Component {
  constructor(props) {
    super(props);

    this.state = { skills: [] };
  }

  componentWillMount() {
    new APIRequest({
      url: 'http://localhost:8000/skills/',
      method: "GET"
    })
    .then((response) => this.setState({ skills: response.data }))
    .catch((response) => console.log(response))
  }

  skillCard(item, key) {
    return(
      <div className="card">
        <div className="card-header" role="tab" id={"heading" + key}>
          <div className="row">
            <h4 className="mb-0 col align-self-center">
              <a data-toggle="collapse" data-parent="#accordion" href={"#collapse" + key} aria-expanded="false" aria-controls={"collapse" + key}>
                { item.name }
              </a>
            </h4>
            <p className="col mb-0 align-self-center text-right">
              Worked on since { moment(item.created_date).format('MMMM YYYY') }
            </p>
          </div>
        </div>
        <div id={"collapse" + key} class="collapse hide" role="tabpanel" aria-labelledby={ "heading" + key }>
          <div class="card-block">
            <p>Total Time Spent: <strong>{
              durationToFormattedMoment(
                item.entries.reduce((a, b) => a + b.time_spent, 0)
              )
            }
            </strong></p>
            <p>Recent Entries:</p>
            <ul className="dashed">
              {
                item.entries.map((entry) =>
                  <li>
                    <a href="">
                      <strong>{ durationToFormattedMoment(entry.time_spent) }</strong> on { moment(entry.created_date).format('DD-MM-YYYY') }
                    </a>
                  </li>
                )
              }
            </ul>
          </div>

          <div class="card-block">
            <p><strong><NavLink to="/">+ Add Entry</NavLink></strong></p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return(
      <section className="skills-list content-section">
        <div className="accordion" role="tablist" aria-multiselectable="true">
          <div class="container">
            { this.state.skills.map(this.skillCard) }
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(SkillsList);
