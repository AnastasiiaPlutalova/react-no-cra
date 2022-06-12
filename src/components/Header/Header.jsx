import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

function Header() {
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <FontAwesomeIcon icon={faCut} />
    </nav>
  );
}

export default Header;
