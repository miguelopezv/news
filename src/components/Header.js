import React from 'react';

const Header = ({ title }) => (
  <nav className="nav-wrapper light-blue darken-3">
    <h1 className="brand-logo center">{title}</h1>
  </nav>
);

export default Header;
