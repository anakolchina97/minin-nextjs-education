import Link from "next/link";
import { useEffect, useState } from "react";
import { MainLayout } from "../components/MainLayout";
import styles from "../styles/Posts.module.scss";

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const json = await response.json();
      setPosts(json);
    }

    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return <MainLayout>Loading...</MainLayout>;
  }

  return (
    <MainLayout titleText="Posts">
      <h1 className={styles.postsTitle}>Posts</h1>
      <div className={styles.posts}>
        {posts.map(({ id, title }) => (
          <Link href={`/post/${id}`} className={styles.post} key={id}>
            {title}
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}

//  статический метод, который будет выполняться на сервере
Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return {
      posts: null,
    };
  }

  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts,
  };
};
