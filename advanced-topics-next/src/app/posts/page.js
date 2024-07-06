"use client";

import { useState, useEffect } from "react";
import styles from "./posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://api.mockfly.dev/mocks/7731432c-1d3d-4332-abfc-bd26820791cd/api/posts`)
      .then((response) => response.json())
      .then((res) => setPosts(res));
  }, []);

  const handleDelete = (post) => {
    // fetch(
    //   `https://api.mockfly.dev/mocks/7731432c-1d3d-4332-abfc-bd26820791cd/api/posts`,
    //   {
    //     method: "DELETE",
    //   }
    // )
    //   .then((res) =>  res.json())
    //   .then((res) => console.log(res));
  };

  return (
    <div>
      <h1> Here you will find all of my blog posts</h1>
      <div>
        {posts?.map((post) => {
          return (
            <div className={styles.postWrapper}>
              <p> Title: {post.title}</p>
              <p> Content: {post.content}</p>
              <button onClick={handleDelete(post)}> DELETE </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
