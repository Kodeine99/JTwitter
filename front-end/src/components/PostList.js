import React from "react";
import "../assets/css/Post.css";
import PostItem from "./PostItem";

function PostList() {
  return (
    <>
      <section className="post-section">
        <div className="post-list">
          <PostItem />
        </div>
      </section>
    </>
  );
}

export default PostList;
