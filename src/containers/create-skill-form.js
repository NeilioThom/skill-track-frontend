import React from 'react';
import { Component } from 'react';
import APIRequest from '../api/api';
import CreateSkillForm from '../components/create-skill-form';
import { covertTimeToSeconds } from '../util/formatting';

class CreateSkillFormContainer extends Component {
    constructor(props) {
        super(props);

        // Bind events to this object
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            name: '',
            weekly_goal: 0
        }
    }

    // POST to skills endpoint with form data
    onSubmit(e) {
        e.preventDefault();
        var self = this;

        APIRequest('skills/', {
            method: 'POST',
            data: {
                name: this.state.name,
                weekly_goal: covertTimeToSeconds(this.state.weekly_goal)
            }
        }).then(function (response) {
            if (response.status === 200) {
                self.props.history.push('/');
            }
        });
    }

    // Update state when the form data is changed
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <CreateSkillForm
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                name={this.state.name}
                weekly_goal={this.state.weekly_goal}
            />
        )
    }
}

export default CreateSkillFormContainer;