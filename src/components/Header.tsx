import { IoMdNotifications } from "react-icons/io";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LegacyRef, useState } from "react";
import { GoSidebarCollapse } from "react-icons/go";

interface Props {
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
  barCloseRef: LegacyRef<HTMLElement>;
  barOpenRef: LegacyRef<HTMLElement>;
}
export default function Header({
  handleCloseSidebar,
  handleOpenSidebar,
  barCloseRef,
  barOpenRef,
}: Props) {
  const [activeSidebarClass, setActiveSidebarClass] = useState<string>("");

  return (
    <div className="border-b border-solid border-slate-300 p-3">
      <ul
        className={`transition-all flex justify-between text-gray-600 pr-0 mx-0 md:pr-80 md:mx-5 ${activeSidebarClass}`}
      >
        <li className="flex items-center space-x-4 space-x-reverse">
          <i
            className="bar-open cursor-pointer select-none block md:hidden"
            onClick={() => {
              setActiveSidebarClass("content-active");
              handleOpenSidebar();
            }}
            ref={barOpenRef}
          >
            <HiBars3BottomRight />
          </i>

          <i
            className="bar-close cursor-pointer select-none hidden md:block"
            onClick={() => {
              setActiveSidebarClass("content-deactive");
              handleCloseSidebar();
            }}
            ref={barCloseRef}
          >
            <GoSidebarCollapse />
          </i>

          <a href="">داشبورد</a>
          <a href="">تنظیمات</a>
        </li>
        <li className="flex space-x-reverse space-x-4 items-center">
          <i style={{ fontSize: "1.5rem" }}>
            <IoMdNotifications />
          </i>
          <div className="cursor-pointer flex">
            <img
              className="w-[50px] min-w-[50px] h-[50px] rounded-full ring-2 border-2 ring-blue-500"
              src="/logo.svg"
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
