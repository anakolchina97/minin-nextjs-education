import Link from "next/link";

export function MainLayout({ children }) {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
