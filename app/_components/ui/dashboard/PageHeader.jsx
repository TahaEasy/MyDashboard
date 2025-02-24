import Image from "next/image";

import image from "@/public/images/avatars/infinite-man.jpg";
import ThemeToggler from "./ThemeToggler";

const PageHeader = ({ title = "داشبورد" }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-3xl text-text">{title}</h1>
      <div className="flex justify-end items-center gap-8">
        <ThemeToggler />
        <div className="flex justify-end items-center gap-2">
          <div>
            <Image
              src={image}
              alt="avatar"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div>
            <span className="text-sm text-text">طاها شاملی</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
