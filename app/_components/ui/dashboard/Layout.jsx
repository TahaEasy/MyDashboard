import Navlinks from "./Navlinks";
import NavActionsLinks from "./NavActionsLinks";
import LoadingWrapper from "../../LoadingWrapper";

const Layout = ({ children }) => {
  return (
    <LoadingWrapper>
      <div className="bg-dash-back dark:bg-fill-900 min-h-dvh w-full transition-all duration-200">
        <aside className="fixed top-0 start-0 h-dvh w-56 bg-dash-fore shadow-lg dark:shadow-transparent transition-all duration-200">
          <div className="pt-8 pb-4 px-4">
            <div className="flex justify-start items-center gap-4 w-full mb-8">
              <div>
                <img
                  src="/images/avatars/infinite-man.jpg"
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div>
                <h4 className="text-text text-lg font-semibold">ابراهیم</h4>
                <span className="text-text text-xs">برنامه نویس</span>
              </div>
            </div>
            <Navlinks />
          </div>
          <div className="w-full h-[2px] bg-grayish"></div>
          <NavActionsLinks />
        </aside>
        <main className="w-[calc(100%-14rem)] ms-56 ps-4">
          <div className="py-12 px-16">{children}</div>
        </main>
      </div>
    </LoadingWrapper>
  );
};

export default Layout;
