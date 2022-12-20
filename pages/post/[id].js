import { useState, useEffect } from "react";
import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";
import styles from "../../styles/Post.module.scss";
import { useRouter } from "next/router";

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) {
      // если с сервера прилетел null делаем запрос на front-end
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout titleText={"Post"}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>
      <Link href={"/posts"}>Back to all posts</Link>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return {
    post,
  };
};
