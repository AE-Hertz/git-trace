"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center font-mono">
      <Link href="/" className="text-lg">
        Trace ↯
      </Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={classNames({
              "text-zinc-900": currentPath === link.href,
              "text-zinc-500": currentPath !== link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
