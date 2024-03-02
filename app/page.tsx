import Image from "next/image";
import Header from "./ui/Header";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <main>
        <div>hello</div>
      </main>
    </SessionProvider>
  );
}
