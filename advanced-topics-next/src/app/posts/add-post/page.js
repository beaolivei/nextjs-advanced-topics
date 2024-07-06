"use client";

import { useState } from "react";
import styles from "./add-post.module.css";
const AddPosts = () => {
  const [data, setData] = useState([]);

  const handleType = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handlePostSubmit = async () => {
    let response = await fetch(
      "https://api.mockfly.dev/mocks/7731432c-1d3d-4332-abfc-bd26820791cd/api/posts/",
      {
        method: "POST",
        body: JSON.stringify({
          title: data.title,
          content: data.content,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    response = await response.json();
    setData([])
  };
  return (
    <div>
      <h1> Here you will find all of my blog posts</h1>
      <p> Add a Title: </p>
      <input className={styles.title} type="text" id="title" name="title" value={data.title} onChange={handleType} />
      <p> Add content: </p>
      <textarea rows="2" cols="25" className={styles.content} type="text" id="content" name="content" value={data.content} onChange={handleType} />
      <button type="submit" onClick={handlePostSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AddPosts;