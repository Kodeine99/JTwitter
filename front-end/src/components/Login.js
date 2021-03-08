import React from "react";
import "../assets/css/Auth.css";

function Login() {
  return (
    <>
      <section className="auth-container">
        <form className="auth-form">
          <h2>Enter your account</h2>
          <div className="error-message">Error: Your Password incorrect</div>
          <input type="email" name="email" id="" required placeholder="Email" />
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Password"
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
