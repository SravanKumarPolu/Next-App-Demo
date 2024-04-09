import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>Hellow word</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
