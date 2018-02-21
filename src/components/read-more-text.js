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
          <p>
            { text }
            <a href="#" onClick={ this.toggleVisibility }> Less</a>
          </p>
        )
      }
      else {
        return(
          <p>
            { text.substr(0, limit) }
            <a href="#" onClick={ this.toggleVisibility }> ... More</a>
          </p>
        )
      }
    }

    return text;
  }

  render() {
    return(
      <div class="read-more-text">{ this.getText() }</div>
    )
  }
}

export default ReadMoreText;
