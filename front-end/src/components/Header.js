import React, { useContext } from "react";
import AppContext from "./AppContext";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

function Header() {
  const { state, dispatch } = useContext(AppContext);
  const { user } = state;
  const signOut = () => {
    localStorage.removeItem("token");
    // Reset user to null
    dispatch({ type: "CURRENT_USER", payload: null });
  };
  return (
    <div>
      <header className="header">
        <h1 className="logo">
          <Link to="/">JTwitter</Link>
        </h1>
        <nav>
          <ul className="main-nav">
            {user ? (
              <>
                <li>
                  <span className="user_name">
                    <a href="#1">Hello, {user.userName}</a>
                  </span>
                </li>
                <li onClick={() => signOut()}>
                  <Link>Sign out</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
