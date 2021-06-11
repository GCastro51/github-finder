// Class based component
// rce - shortcut to create function component template with export @ bottom

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Navbar extends Component {

  // add default props
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }

  // validate prop data types- makes program more robust
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
          </h1>
      </nav>
    )
  }
}

export default Navbar
