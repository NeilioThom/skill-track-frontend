import React from 'react';
import { Component } from 'react';

class ReadMoreText extends Component {
  constructor() {
    super();

    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = { expanded: false }
  }

  toggleVisibility(e) {
    e.preventDefault();
    this.setState({ expanded: !this.state.expanded });
  }

  getText() {
    var text = this.props.text;
    var limit = this.props.limit;

    if(text.length > limit) {
      if(this.state.expanded) {
        return(
          <span>
            { text }
            <button className="btn-link" onClick={ this.toggleVisibility }> Less</button>
          </span>
        )
      }
      else {
        return(
          <span>
            { text.substr(0, limit) }
            <a href onClick={ this.toggleVisibility }> ... More</a>
          </span>
        )
      }
    }

    return text;
  }

  render() {
    return(
      <span className="read-more-text">{ this.getText() }</span>
    )
  }
}

export default ReadMoreText;
