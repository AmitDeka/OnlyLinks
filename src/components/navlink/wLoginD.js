"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinkLogIn } from "./links";

export default function WloginD(props) {
  const currentPathname = usePathname();

  return (
    <>
      <ul className="md:flex-row md:items-center md:mt-0 md:ps-6 md:pe-6 md:flex hidden gap-6">
        {navLinkLogIn.map(({ title, url }) => (
          <li
            key={title}
            className={`${
              currentPathname === url ? "page-active" : "text-dark"
            }`}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
              alt="Tailwind CSS Navbar component"
              src={props.image}
              width={40}
              height={40}
              unoptimized={true}
            />
          </div>
        </div>

        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <p className="mb-4 text-base font-semibold">Hello: {props.name}</p>
          </li>
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a onClick={() => signOut()}>Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}
