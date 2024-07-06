"use client"

import { useState, useEffect } from "react"
import styles from "./posts.module.css"
const MyPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://api.mockfly.dev/mocks/7731432c-1d3d-4332-abfc-bd26820791cd/api/posts")
        .then((res) => res.json())
        .then((response) => setPosts(response))
    }, [])

    return(
        <div>
            <h1> Here you will find all of my blog posts </h1>
            <div>
                {
                    posts?.map((post) => {
                        return(
                            <div className={styles.postWrapper}>
                                <p className={styles.title}> Title: {post.title}</p>
                                <p className={styles.content}> Content: {post.content} </p>
                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
}

export default MyPosts