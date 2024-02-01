"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinkNoLogIn } from "./links";

export default function WoLoginM() {
  const currentPathname = usePathname();

  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
  );
}
