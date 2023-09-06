import SidebarItem from "./SidebarItem";
import { FaNewspaper, FaUserEdit, FaUsers } from "react-icons/fa";
import {
  BiExit,
  BiSolidReceipt,
  BiSolidCommentAdd,
  BiSolidCommentMinus,
  BiSolidDiscount,
  BiSolidCategory,
  BiCode,
  BiSupport,
  BiHelpCircle,
} from "react-icons/bi";

import {
  BsBagCheckFill,
  BsBagDashFill,
  BsDatabaseAdd,
  BsPeopleFill,
  BsReceipt,
} from "react-icons/bs";
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
import SidebarItemExit from "./SidebarItemExit";
import { LegacyRef } from "react";

interface Props {
  sidebarRef: LegacyRef<HTMLElement>;
}
export default function Sidebar({ sidebarRef }: Props) {
  return (
    <aside
      className={`sidebar transition-all fixed top-0 right-0 bg-slate-800 w-80 h-screen translate-x-full md:translate-x-0 overflow-y-scroll`}
      ref={sidebarRef}
    >
      <ul className="p-0 overflow-hidden">
        <SidebarLogoItem />
        <SidebarItem icon={<AiFillDashboard />} to="/" text="داشبورد" />

        <SidebarLabelItem text="محصولات" />

        <SidebarItem icon={<AiFillShopping />} to="/products" text="محصولات" />

        <SidebarItem
          icon={<BsDatabaseAdd />}
          to="/products/create"
          text="ایجاد محصول"
        />

        <SidebarLabelItem text="کاربران" />
        <SidebarItem icon={<FaUsers />} to="/users" text="کاربران" />

        <SidebarItem
          icon={<TbLockAccess />}
          to="/users/manage-acl"
          text="سطح دسترسی"
        />

        <SidebarItem
          icon={<BsDatabaseAdd />}
          to="/users/create"
          text="ایجاد کاربر"
        />

        <SidebarLabelItem text="مقالات" />

        <SidebarItem icon={<FaNewspaper />} to="/articles" text="مقالات" />

        <SidebarItem
          icon={<BsDatabaseAdd />}
          to="/articles/create"
          text="ایجاد مقاله"
        />

        <SidebarLabelItem text="نظرات" />

        <SidebarItem icon={<AiOutlineComment />} to="/comments" text="نظرات" />

        <SidebarItem
          icon={<BiSolidCommentAdd />}
          to="/comments/approved"
          text="نظرات تایید شده"
        />

        <SidebarItem
          icon={<BiSolidCommentMinus />}
          to="/comments/not-approved"
          text="نظرات تایید نشده"
        />

        <SidebarLabelItem text="پرداخت‌ها" />

        <SidebarItem icon={<BsReceipt />} to="/payments" text="پرداخت های من" />

        <SidebarItem
          icon={<BiSolidReceipt />}
          to="/payments/all"
          text="تمام پرداخت‌ها"
        />

        <SidebarItem
          icon={<BsBagCheckFill />}
          to="/payments/successful"
          text="پرداخت‌های موفق"
        />

        <SidebarItem
          icon={<BsBagDashFill />}
          to="/payments/failed"
          text="پرداخت‌های ناموفق"
        />

        <SidebarLabelItem text="تخفیف‌ها" />
        <SidebarItem
          icon={<BiSolidDiscount />}
          to="/discounts"
          text="تخفیف‌ها"
        />

        <SidebarItem
          icon={<BsDatabaseAdd />}
          to="/discounts/create"
          text="ایجاد تخفیف"
        />

        <SidebarLabelItem text="دسته‌ها" />
        <SidebarItem
          icon={<BiSolidCategory />}
          to="/categories"
          text="دسته‌ها"
        />

        <SidebarItem
          icon={<BsDatabaseAdd />}
          to="/categories/create"
          text="ایجاد دسته"
        />

        <SidebarLabelItem text="پشتیبانی" />

        <SidebarItem
          icon={<BiHelpCircle />}
          to="/tickets/users"
          text="تیکت‌ها"
        />

        <SidebarItem
          icon={<BiSupport />}
          to="/tickets"
          text="تیکت‌های من"
        />
        <SidebarItem
          icon={<BsDatabaseAdd />}
          to="/tickets/create"
          text="ایجاد تیکت"
        />

        <SidebarLabelItem text="شخصی" />

        <SidebarItem icon={<FaUserEdit />} to="/settings" text="تنظیمات" />

        <SidebarItem
          icon={<AiFillNotification />}
          to="/messages"
          text="پیغام‌ها"
        />

        <SidebarItem
          icon={<AiFillSetting />}
          to="/change-password"
          text="ویرایش رمز عبور"
        />

        <SidebarItemExit icon={<BiExit />} to="/change-password" text="خروج" />

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
    </aside>
  );
}
