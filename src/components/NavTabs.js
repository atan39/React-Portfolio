import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => handlePageChange('About')}
          className={`nav-link ${currentPage === 'About' ? 'active' : ''}`}
        >
          About
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`}
        >
          Contact
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={`nav-link ${currentPage === 'Portfolio' ? 'active' : ''}`}
        >
          Portfolio
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={`nav-link ${currentPage === 'Resume' ? 'active' : ''}`}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;