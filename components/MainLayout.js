import Head from "next/head";
import Link from "next/link";

export function MainLayout({ children, title = "" }) {
  return (
    <>
      <Head>
        <title>Next.JS {title}</title>
        <meta name="keywords" content="next, js, nextjs" />
        <meta name="description" content="This is YouTube tutorial for next" />
      </Head>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
