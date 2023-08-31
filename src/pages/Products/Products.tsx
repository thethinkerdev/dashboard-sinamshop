import { Link } from "react-router-dom";
import ButtonTrash from "../../components/Table/ButtonTrash";
import ButtonRedirectToEdit from "../../components/Table/ButtonRedirectToEdit";

export default function Products() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0">
        <h1 className="text-4xl font-bold">مدیریت محصولات</h1>

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

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
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
                <tbody>
                  {[1, 2, 3, 4, 5, 6].map((number,index) =>{
                    return <tr key={number} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          {number}
                        </td>

                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          <img
                            className="w-full max-h-[200px]"
                            src="/logo.svg"
                            alt=""
                          />
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          کیف وارداتی تک طرح
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          ۹۰۰،۰۰۰ تومان
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          <span className="px-3 py-2 rounded  shadow-2xl text-zinc-900 border-b-2">
                            کیف
                          </span>
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">۱</td>
                        <td className="whitespace-nowrap  px-6 py-4">Admin</td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          <div className="flex space-x-4 space-x-reverse max-w-[200px] mx-auto">
                            <ButtonTrash />
                            <ButtonRedirectToEdit />
                          </div>
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          چهارشنبه، ۲۱ تیر ۰۲
                        </td>
                      </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
