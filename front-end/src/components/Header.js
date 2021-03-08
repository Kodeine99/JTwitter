import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <h1 className="logo">
          <Link to="/">JTwitter</Link>
        </h1>
        <nav>
          <ul className="main-nav">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <span className="user_name">
                <a href="#1">Hello, Kodeine</a>
              </span>
            </li>
            <li>
              <a href="#1">Sign out</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
