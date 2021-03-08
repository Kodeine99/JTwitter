import React from "react";
import "../assets/css/Form.css";

function Form() {
  return (
    <div>
      <section className="form-section">
        <form className="form">
          <textarea
            name="content"
            id="content"
            type="text"
            className="content"
            placeholder="What's on your mind?"
          ></textarea>
          <button className="btn" type="submit">
            Tweet
          </button>
        </form>
      </section>
    </div>
  );
}

export default Form;
