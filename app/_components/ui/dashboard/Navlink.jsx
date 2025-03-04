"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { LuChevronUp } from "react-icons/lu";

const NavlinkContext = createContext();

const Navlink = ({
  children,
  href = "",
  isChildren = false,
  isLink = true,
}) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <NavlinkContext.Provider
      value={{ isActive, isListOpen, setIsListOpen, href, isChildren, isLink }}
    >
      {children}
    </NavlinkContext.Provider>
  );
};

const useNavlink = () => {
  const context = useContext(NavlinkContext);

  if (!context) {
    throw new Error("please use the Navlink Context inside its provider");
  }

  return context;
};

const ClickLink = ({ children }) => {
  const { isActive, href, isChildren, isLink, setIsListOpen } = useNavlink();

  return (
    <>
      {isLink ? (
        <Link
          href={href}
          className={`flex justify-start items-center gap-4 w-full py-2 px-3 rounded-2xl ${
            isChildren
              ? "before:content-[''] before:absolute before:top-1/2 before:-start-2 before:-translate-y-1/2 before:h-px before:bg-text/50 before:transition-all before:duration-200"
              : ""
          } ${
            isActive
              ? `text-black bg-grayish/20 dark:bg-white ${
                  isChildren ? " before:w-4" : ""
                }`
              : `text-text hover:bg-grayish/10 dark:hover:bg-slate-400/50 ${
                  isChildren ? " before:w-0" : ""
                }`
          } transition-all duration-200`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={() => setIsListOpen((s) => !s)}
          className={`flex justify-start items-center gap-4 w-full py-2 px-3 rounded-2xl ${
            isChildren
              ? "before:content-[''] before:absolute before:top-1/2 before:-start-2 before:-translate-y-1/2 before:h-px before:bg-text/50 before:transition-all before:duration-200"
              : ""
          } ${
            isActive
              ? `text-black bg-grayish/20 dark:bg-white ${
                  isChildren ? " before:w-4" : ""
                }`
              : `text-text hover:bg-grayish/10 dark:hover:bg-slate-400/50 ${
                  isChildren ? " before:w-0" : ""
                }`
          } cursor-default transition-all duration-200`}
        >
          {children}
        </button>
      )}
    </>
  );
};

const Detail = ({ children }) => {
  return <div className="relative">{children}</div>;
};

const ToggleList = () => {
  const { isListOpen, setIsListOpen } = useNavlink();

  return (
    <button
      onClick={() => setIsListOpen((s) => !s)}
      className="absolute top-1/2 left-3 -translate-y-1/2 text-text bg-dash-fore hover:bg-dash-back p-1 rounded-md transition-all duration-200 z-30"
    >
      <LuChevronUp
        className={`${
          isListOpen ? "rotate-180" : ""
        } transition-all duration-200`}
      />
    </button>
  );
};

const List = ({ children }) => {
  const { isListOpen } = useNavlink();

  return (
    <div className={`${isListOpen ? "" : "hidden"} relative`}>
      <span className="absolute start-2 top-1 h-[calc(100%-0.5rem)] w-px bg-text/50"></span>
      {children}
    </div>
  );
};

export { Navlink, Detail, ToggleList, List, ClickLink };
