import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container top-nav">
        <div className="logo">CRM</div>

        <nav className="top-menu">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">LOGOUT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
