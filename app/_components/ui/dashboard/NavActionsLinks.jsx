"use client";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import Navlink from "./Navlink";

const NavActionsLinks = () => {
  return (
    <div className="pb-8 pt-4 px-4">
      <div className="w-full py-2 px-1">
        <Navlink href="/dashboard/settings" Icon={IoSettingsOutline}>
          تنظیمات
        </Navlink>
      </div>
      <div className="w-full py-2 px-1">
        <Navlink href="/dashboard/logout" Icon={HiOutlineLogout}>
          خروج
        </Navlink>
      </div>
    </div>
  );
};

export default NavActionsLinks;
