import React, { useCallback, useEffect } from "react";
import "../assets/css/Post.css";
import PostItem from "./PostItem";
import axios from "axios";

function PostList() {
  const getAllPosts = useCallback(async () => {
    try {
      const option = {
        method: "get",
        url: "/api/v1/posts",
      };
      // Axios tra lai response chua posts
      const response = await axios(option);
      const posts = response.data.data.posts;
      console.log(posts);
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);
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
