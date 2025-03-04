"use client";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { Navlink, Detail, ClickLink } from "./Navlink";

const NavActionsLinks = () => {
  return (
    <div className="pb-8 pt-4 px-4">
      <div className="w-full py-2 px-1">
        <Navlink href="/dashboard/settings">
          <Detail>
            <ClickLink>
              <span>
                <IoSettingsOutline className="w-6 h-6" />
              </span>
              <span>تنظیمات</span>
            </ClickLink>
          </Detail>
        </Navlink>
      </div>
      <div className="w-full py-2 px-1">
        <Navlink href="/dashboard/logout">
          <Detail>
            <ClickLink>
              <span>
                <HiOutlineLogout className="w-6 h-6" />
              </span>
              <span>خروج</span>
            </ClickLink>
          </Detail>
        </Navlink>
      </div>
    </div>
  );
};

export default NavActionsLinks;
