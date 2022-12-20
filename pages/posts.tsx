import { NextPageContext } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MainLayout } from "../components/MainLayout";
import { MyPost } from "../interfaces/post";
import styles from "../styles/Posts.module.scss";

interface PostsPageProps {
  posts: MyPost[];
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`);
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
Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return {
      posts: null,
    };
  }

  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPost[] = await response.json();

  return {
    posts,
  };
};
