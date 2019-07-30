import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <nav className="nav-wrapper light-blue darken-3">
    <h1 className="brand-logo center">{title}</h1>
  </nav>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
