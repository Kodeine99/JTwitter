import React from "react";
import "../assets/css/Auth.css";

function Register(props) {
  return (
    <>
      <section className="auth-container">
        <form className="auth-form">
          <h2>Enter your account</h2>
          <div className="error-message">Error: Your Password incorrect</div>
          <input type="text" name="name" id="" required placeholder="Name" />
          <input type="email" name="email" id="" required placeholder="Email" />
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Password"
          />
          <button className="btn" type="submit">
            Register
          </button>
        </form>
      </section>
    </>
  );
}

export default Register;
