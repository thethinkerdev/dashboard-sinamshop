import { Link } from "react-router-dom";
import ButtonTrash from "../../components/Table/ButtonTrash";
import ButtonRedirectToEdit from "../../components/Table/ButtonRedirectToEdit";
import Title from "../../components/Title";
import Table from "../../components/Table";

export default function Products() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0">
        <Title>مدیریت محصولات</Title>

        <Link
          className="border border-green-500 text-green-500 rounded shadow px-3 py-2"
          to="/products/create"
        >
          افزودن محصول
        </Link>
      </div>
      <div className="flex items-center justify-between mt-3 flex-wrap">
        <div>
          <button className="px-3 py-2 border border-slate-900 shadow active:bg-slate-900 active:text-slate-100">
            جدیدترین
          </button>
          <button className="px-3 py-2 border border-slate-900 shadow bg-slate-900 text-slate-100">
            قدیمی‌ترین
          </button>
        </div>

        <div>
          فیلتر :
          <button className="px-3 py-2 shadow-2xl shadow-fuchsia-500 border border-fuchsia-500 text-fuchsia-500">
            بیشترین فروش
          </button>
          <button className="px-3 py-2 shadow-2xl shadow-fuchsia-500 border">
            بدون خرید
          </button>
          <button className="px-3 py-2 shadow-2xl shadow-fuchsia-500 border border-fuchsia-500 text-fuchsia-500">
            بدون موجودی
          </button>
        </div>
      </div>

      <Table>
        <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
          <tr>
            <th scope="col" className=" px-6 py-4">
              #
            </th>
            <th scope="col" className=" px-6 py-4">
              تصویر محصول
            </th>

            <th scope="col" className=" px-6 py-4">
              نام محصول
            </th>
            <th scope="col" className=" px-6 py-4">
              قیمت
            </th>
            <th scope="col" className=" px-6 py-4">
              دسته‌ٔ محصول
            </th>
            <th scope="col" className=" px-6 py-4">
              تعداد
            </th>
            <th scope="col" className=" px-6 py-4">
              فروشنده
            </th>
            <th scope="col" className=" px-6 py-4">
              عملیات
            </th>
            <th scope="col" className=" px-6 py-4">
              تاریخ ایجاد
            </th>
          </tr>
        </thead>
        <Table.Body></Table.Body>
      </Table>
    </section>
  );
}
