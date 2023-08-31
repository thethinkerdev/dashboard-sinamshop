import { IoMdNotifications } from "react-icons/io";
import { FaBars } from "react-icons/fa";

interface Props {
  handleBarClick: () => void;
  isSidebarOpen: boolean;
}
export default function Header({ handleBarClick, isSidebarOpen }: Props) {
  return (
    <div className="border-b border-solid border-slate-300 p-3">
      <ul className={`${isSidebarOpen ? "pr-80" : ""} mx-5 flex justify-between text-gray-600`}>
        <li className="flex items-center space-x-4 space-x-reverse">
          <i className="cursor-pointer select-none" onClick={handleBarClick}>
            <FaBars />
          </i>
          <a href="">داشبورد</a>
          <a href="">تنظیمات</a>
        </li>
        <li className="flex space-x-reverse space-x-4 items-center">
          <i style={{ fontSize: "1.5rem" }}>
            <IoMdNotifications />
          </i>
          <div className="cursor-pointer">
            <img
              className="w-12 h-12 rounded-full ring-2 border-2 ring-blue-500"
              src="/logo.svg"
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
