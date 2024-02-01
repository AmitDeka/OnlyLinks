import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Darkmode from "./darkmode";
import WloginD from "./navlink/wLoginD";
import WLoginM from "./navlink/wLoginM";
import WologinD from "./navlink/woLoginD";
import WoLoginM from "./navlink/woLoginM";

export default async function Navbar() {
  // const currentPathname = usePathname();

  const session = await getServerSession(authOptions);

  console.log(session);
  const name = session?.user?.name;
  const email = session?.user?.email;
  const image = session?.user?.image;

  return (
    <>
      <header className="navbar bg-base-100 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 rounded-3xl border-color container fixed top-0 left-0 right-0 z-50 w-[calc(100%-2rem)] mt-6 border">
        <div className="md:hidden navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            {!!session && <WoLoginM />}
            {!session && <WLoginM />}
          </div>
        </div>
        <div className="navbar-center md:flex-1">
          <a className="btn btn-ghost logoText text-2xl" href="/">
            OnlyLinks
          </a>
        </div>
        <div className="navbar-end md:flex-none">
          {!!session && <WloginD name={name} email={email} image={image} />}
          {!session && <WologinD />}
          <Darkmode />
        </div>
      </header>
    </>
  );
}
