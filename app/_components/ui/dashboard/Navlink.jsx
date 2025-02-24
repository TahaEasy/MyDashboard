"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ children, href, Icon }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex justify-start items-center gap-4 w-full py-2 px-3 rounded-2xl ${
        isActive
          ? "text-black bg-grayish/20 dark:bg-white"
          : "text-text hover:bg-grayish/10 dark:hover:bg-slate-400/50"
      } transition-all duration-200`}
    >
      <span>
        <Icon className="w-6 h-6" />
      </span>
      <span>{children}</span>
    </Link>
  );
};

export default Navlink;
