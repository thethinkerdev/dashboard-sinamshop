import SidebarItem from "./SidebarItem";
import { FaNewspaper, FaUser, FaUserEdit, FaUsers } from "react-icons/fa";
import {
  BiSolidReceipt,
  BiSolidCommentAdd,
  BiSolidCommentMinus,
  BiSolidDiscount,
  BiSolidCategory,
  BiCode,
} from "react-icons/bi";

import { BsBagCheck, BsBagCheckFill, BsBagDashFill, BsDatabaseAdd, BsReceipt } from "react-icons/bs";
import { TbLockAccess } from "react-icons/tb";
import {
  AiFillDashboard,
  AiFillSetting,
  AiFillShopping,
  AiOutlineComment,
  AiFillNotification,
  AiFillHeart,
} from "react-icons/ai";

import SidebarLabelItem from "./SidebarLabelItem";
import SidebarLogoItem from "./SidebarLogoItem";

interface Props {
  isSidebarOpen: boolean;
}
export default function Sidebar({ isSidebarOpen }: Props) {
  return (
    <div
      className={`sidebar fixed bg-slate-800 h-full w-80 overflow-hidden overflow-y-scroll ${
        isSidebarOpen ? "open" : "close"
      } `}
    >
      <ul className="p-0">
        <SidebarLogoItem />
        <SidebarItem icon={<AiFillDashboard />} to="/" text="داشبورد" />

        <SidebarLabelItem text="محصولات" />

        <SidebarItem icon={<AiFillShopping />} to="/users" text="محصولات" />

        <SidebarItem icon={<BsDatabaseAdd />} to="/users" text="ایجاد محصول" />

        <SidebarLabelItem text="کاربران" />
        <SidebarItem icon={<FaUsers />} to="/users" text="کاربران" />

        <SidebarItem icon={<TbLockAccess />} to="/users" text="سطح دسترسی" />

        <SidebarItem icon={<BsDatabaseAdd />} to="/users" text="ایجاد کاربر" />

        <SidebarLabelItem text="مقالات" />

        <SidebarItem icon={<FaNewspaper />} to="/users" text="مقالات" />

        <SidebarItem icon={<BsDatabaseAdd />} to="/users" text="ایجاد مقاله" />

        <SidebarLabelItem text="نظرات" />

        <SidebarItem icon={<AiOutlineComment />} to="/users" text="نظرات" />

        <SidebarItem
          icon={<BiSolidCommentAdd />}
          to="/users"
          text="نظرات تایید شده"
        />

        <SidebarItem
          icon={<BiSolidCommentMinus />}
          to="/users"
          text="نظرات تایید نشده"
        />

        <SidebarLabelItem text="پرداخت‌ها" />

        <SidebarItem icon={<BsReceipt />} to="/users" text="پرداخت های من" />

        <SidebarItem
          icon={<BiSolidReceipt />}
          to="/users"
          text="تمام پرداخت‌ها"
        />

        <SidebarItem icon={<BsBagCheckFill />} to="/users" text="پرداخت‌های موفق" />

        <SidebarItem
          icon={<BsBagDashFill />}
          to="/users"
          text="پرداخت‌های ناموفق"
        />

        <SidebarLabelItem text="تخفیف‌ها" />
        <SidebarItem icon={<BiSolidDiscount />} to="/users" text="تخفیف‌ها" />

        <SidebarItem icon={<BsDatabaseAdd />} to="/users" text="ایجاد تخفیف" />

        <SidebarLabelItem text="دسته‌ها" />
        <SidebarItem icon={<BiSolidCategory />} to="/users" text="دسته‌ها" />

        <SidebarItem icon={<BsDatabaseAdd />} to="/users" text="ایجاد دسته" />

        <SidebarLabelItem text="شخصی" />

        <SidebarItem icon={<FaUserEdit />} to="/users" text="تنظیمات" />

        <SidebarItem
          icon={<AiFillNotification />}
          to="/users"
          text="پیغام‌ها"
        />

        <SidebarItem
          icon={<AiFillSetting />}
          to="/users"
          text="ویرایش رمز عبور"
        />

        <SidebarLabelItem>
          <div className="flex justify-center items-center space-x-2 space-x-reverse">
            <i>
              <BiCode />
            </i>

            <span>با</span>
            <i className="text-rose-500 text-2xl">
              <AiFillHeart />
            </i>
          </div>
        </SidebarLabelItem>
      </ul>
    </div>
  );
}
