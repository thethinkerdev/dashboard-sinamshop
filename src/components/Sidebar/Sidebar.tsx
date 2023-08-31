import SidebarItem from "./SidebarItem";
import { FaUser, FaUserEdit } from "react-icons/fa";
import {
  BiSolidReceipt,
  BiSolidCommentAdd,
  BiSolidCommentMinus,
  BiSolidDiscount,
  BiSolidCategory,
  BiCode,
} from "react-icons/bi";

import { BsBagCheck, BsBagDashFill, BsDatabaseAdd } from "react-icons/bs";
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
export default function Sidebar() {
  return (
    <div className="fixed right-0 top-0 bg-slate-800 h-full w-80 overflow-hidden overflow-y-scroll">
      <ul className="p-0">
        <SidebarLogoItem />
        <SidebarItem icon={<AiFillDashboard />} to="/" text="داشبورد" />

        <SidebarLabelItem text="محصولات" />

        <SidebarItem icon={<AiFillShopping />} to="/users" text="محصولات" />

        <SidebarItem icon={<BsDatabaseAdd />} to="/users" text="ایجاد محصول" />

        <SidebarLabelItem text="کاربران" />
        <SidebarItem icon={<FaUser />} to="/users" text="کاربران" />

        <SidebarItem icon={<TbLockAccess />} to="/users" text="سطح دسترسی" />

        <SidebarItem icon={<BsDatabaseAdd />} to="/users" text="ایجاد کاربر" />

        <SidebarLabelItem text="مقالات" />

        <SidebarItem icon={<FaUser />} to="/users" text="مقالات" />

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

        <SidebarItem icon={<FaUser />} to="/users" text="پرداخت های من" />

        <SidebarItem
          icon={<BiSolidReceipt />}
          to="/users"
          text="تمام پرداخت‌ها"
        />

        <SidebarItem icon={<BsBagCheck />} to="/users" text="پرداخت‌های موفق" />

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

        <SidebarItem icon={<AiFillSetting />} to="/users" text="ویرایش رمز عبور"/>

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
