import Link from "next/link";
import { useState, useEffect } from "react";
import { MainLayout } from "../components/MainLayout";
import styles from "../styles/Posts.module.scss";

export default function Posts({ posts }) {
  return (
    <MainLayout titleText="Posts">
      <h1 className={styles.postsTitle}>Posts</h1>
      <div className={styles.posts}>
        {posts.map(({ id, title, body }) => (
          <Link href={`/post/${id}`} className={styles.post} key={id}>
            {title}
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}

//  статический метод, который будет выполняться на сервере
Posts.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts,
  };
};
