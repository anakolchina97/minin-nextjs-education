import Head from "next/head";
import { Container } from "./Container";
import { Nav } from "./Nav";

interface MainPageProps {
  children: React.ReactNode;
  titleText?: string;
}

export function MainLayout({ children, titleText }: MainPageProps) {
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
