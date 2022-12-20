import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout titleText="Main">
      <h1>Hello, Next.JS</h1>
    </MainLayout>
  );
}
