import { useState, useEffect } from "react";
import { MainLayout } from "../components/MainLayout";
import styles from "../styles/Posts.module.scss";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const json = await response.json();
      setPosts(json);
    }

    load();
  }, []);

  return (
    <MainLayout titleText="Posts">
      <h1 className={styles.postsTitle}>Posts</h1>
      <div className={styles.posts}>
        {posts.map(({ id, title, body }) => (
          <div className={styles.post} key={id}>
            <p>
              {id}. {title}
            </p>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
