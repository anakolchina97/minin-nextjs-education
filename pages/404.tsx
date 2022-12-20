import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1>Error 404</h1>
      <p>
        Please <Link href={"/"}>go back</Link> to home
      </p>
    </MainLayout>
  );
}
