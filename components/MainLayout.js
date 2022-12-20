import Head from "next/head";
import Link from "next/link";
import { Container } from "./Container";
import { Nav } from "./Nav";

export function MainLayout({ children, titleText }) {
  const title = `Next.JS ${titleText}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next, js, nextjs" />
        <meta name="description" content="This is YouTube tutorial for next" />
      </Head>
      <Nav />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
