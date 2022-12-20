import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function Post({ post }) {
  const router = useRouter();
  const { title, body } = post;
  return (
    <MainLayout titleText={"Post"}>
      <h1>{title}</h1>
      <p>{body}</p>
    </MainLayout>
  );
}

Post.getInitialProps = async (ctx) => {
  console.log(ctx);
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();

  return {
    post,
  };
};
