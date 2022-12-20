import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Next.JS | Main</title>
        <meta name="keywords" content="next, js, nextjs" />
        <meta name="description" content="This is YouTube tutorial for next" />
      </Head>
      <h1>Hello, Next.JS</h1>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        <Link href={"/posts"}>Posts</Link>
      </p>
    </>
  );
}
