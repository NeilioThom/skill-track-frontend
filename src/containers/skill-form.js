import React from 'react';
import { Component } from 'react';
import APIRequest from '../api/api';
import SkillForm from '../components/skill-form';
import { covertTimeToSeconds } from '../util/formatting';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { getSkill } from '../api/api';

class SkillFormContainer extends Component {
    constructor(props) {
        super(props);

        // Bind events to this object
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            skill_id: null,
            name: '',
            method: 'POST',
            weekly_goal: 0
        }
    }

    // Checks if we are creating or editing and makes some adjustments
    componentWillMount() {
        if(this.props.match.params.id !== undefined) {
            let skillID = this.props.match.params.id;
            
            getSkill(skillID, { method: 'GET' })
                .then((response) => {
                    this.setState({
                        skill_id: skillID,
                        name: response.data.name,
                        method: 'PUT',
                        weekly_goal: response.data.weekly_goal,
                        editing: true
                    })
                })
        }

    }

    // POST or PUT to skills endpoint with form data to create or edit
    onSubmit(e) {
        e.preventDefault();
        var self = this;
        
        APIRequest('skills/', {
            method: this.state.method,
            data: {
                skill_id: this.state.skill_id,
                name: this.state.name,
                weekly_goal: covertTimeToSeconds(self.state.weekly_goal)
            }
        }).then(function (response) {
            if (response.status === 200) {
                self.props.history.push('/skills/' + response.data.id);
            }
        });
    }

    // Update state when the form data is changed
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <SkillForm
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                name={this.state.name}
                weekly_goal={this.state.weekly_goal}
            />
        )
    }
}

export default withRouter(SkillFormContainer);