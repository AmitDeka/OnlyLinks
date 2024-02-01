"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinkNoLogIn } from "./links";

export default function WoLoginD() {
  const currentPathname = usePathname();

  return (
    <>
      <ul className="md:flex-row md:items-center md:mt-0 md:ps-6 md:pe-6 md:flex hidden gap-6">
        {navLinkNoLogIn.map(({ title, url }) => (
          <li
            key={title}
            className={`${
              currentPathname === url ? "page-active" : "text-dark"
            }`}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
      <a className="btn btn-primary btn-custom md:flex hidden" href="/login">
        Login
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </a>
      <a className="btn btn-ghost md:hidden" href="/login">
        <span className="sr-only">Login</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-5 h-5"
          viewBox="0 0 24 24">
          <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
          <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
        </svg>
      </a>
    </>
  );
}
