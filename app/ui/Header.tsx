import React from "react";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaFootball } from "react-icons/fa6";

type Props = {};
function SignOut() {
  return (
    <form
      action={async () => {
        'use server'
        await SignOut();
      }}
    >
      <Button type="submit" text="SignOut" />
    </form>
  );
}
const Header = async (props: Props) => {
  const session = await auth();
  // console.log(session); // to see server log

  return (
    <header>
      <nav className="flex justify-between p-4">
        <div className="flex items-center gap-2">
          <FaFootball />
          <h1>Logo</h1>
        </div>
        <div>
          {session?.user ? (

            <div className="flex items-center gap-1">
              {session.user.name && session.user.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={32}
                  height={32}
                  className=" rounded"
                />
               )} 
              <h2>{session.user.name}</h2>
              <SignOut />
            </div>
          ) : (
            <Link href="/api/auth/signin">
              <Button text="Sign In" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
