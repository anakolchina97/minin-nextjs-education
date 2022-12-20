import Link from "next/link";
import styles from "../styles/Nav.module.scss";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
      </ul>
    </nav>
  );
}
