import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">DvDetective</div>
      <ul className="nav-items">
        <li>Case Files</li>
        <li>Evidence</li>
        <li>Reports</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
