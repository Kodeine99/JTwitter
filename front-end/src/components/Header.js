import React from "react";
import "../assets/css/Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <h1 className="logo">
          <a href="#1">JTwitter</a>
        </h1>
        <nav>
          <ul className="main-nav">
            <li>
              <a href="#1">Login</a>
            </li>
            <li>
              <a href="#1">Register</a>
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
