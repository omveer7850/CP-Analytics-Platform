import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="nav-logo-icon">⌨</span>
        CP Tracker
      </div>
      <div className="nav-spacer" />
      <div className="nav-user">
        <span>My Dashboard</span>
        <div className="avatar">CP</div>
      </div>
    </nav>
  );
}