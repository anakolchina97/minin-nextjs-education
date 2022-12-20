import Link from "next/link";

export default function Index() {
  return (
    <>
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
