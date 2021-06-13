// Class based component
// rce - shortcut to create function component template with export @ bottom

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// destructure props 
const Navbar = ({ icon, title }) => {

  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

// add default props
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

// validate prop data types- makes program more robust
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar
