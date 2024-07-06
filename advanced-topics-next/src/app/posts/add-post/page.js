"use client"
import styles from "./add-post.module.css"
import { useState } from "react"
const AddPost = () => {
    const [data, setData] = useState({})
    const handleType = (e) => {
        setData(
            (prevState) => {
                return { ... prevState, [e.target.name]: e.target.value}
            }
        )
    }
    const handleSubmit = async () => {
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
            })
            
    }

    return(
        <div>
            <h1> Here you can add new posts </h1>
            <p> Add a title: </p>
            <input className={styles.title} type="text" id="title" name="title" onChange={handleType}/>
            <p> Add content: </p>
            <textarea className={styles.content} rows="2" cols="25" type="text" id="content" name="content" onChange={handleType}/>
            <button type="submit" onClick={handleSubmit}> SUBMIT </button>
        </div>
    )
}

export default AddPost