"use client";

import {
  LuClipboardList,
  LuLayoutDashboard,
  LuMail,
  LuUsers,
} from "react-icons/lu";

import Navlink from "./Navlink";

const links = [
  {
    placeholder: "داشبورد",
    href: "/dashboard",
    Icon: LuLayoutDashboard,
  },
  {
    placeholder: "پروژه ها",
    href: "/dashboard/projects",
    Icon: LuClipboardList,
  },
  {
    placeholder: "پیام ها",
    href: "/dashboard/messages",
    Icon: LuMail,
  },
  {
    placeholder: "مشتری ها",
    href: "/dashboard/customers",
    Icon: LuUsers,
  },
];

const Navlinks = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      {links.map(({ href, Icon, placeholder }, i) => (
        <div className="w-full py-2 px-1" key={i}>
          <Navlink href={href} Icon={Icon}>
            {placeholder}
          </Navlink>
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
