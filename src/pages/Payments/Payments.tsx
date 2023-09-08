import Title from "../../components/Title";
import Table from "../../components/Table";
import ButtonTrash from "../../components/Buttons/ButtonRedirectToEdit";
import ButtonRedirectToEdit from "../../components/Buttons/ButtonTrash";
import TableHeadItem from "../../components/Table/TableHeadItem";
import PaymentProducts from "../../components/Payments/PaymentProducts";

export default function Products() {
  return (
    <section>
      <Title>مدیریت پرداخت‌ها</Title>

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
            موفق آمیز
          </button>
          <button className="px-3 py-2 shadow-2xl shadow-fuchsia-500 border">
            ناموفق
          </button>
          <button className="px-3 py-2 shadow-2xl shadow-fuchsia-500 border border-fuchsia-500 text-fuchsia-500">
            درحالا انجام / رها شده
          </button>
        </div>
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadItem>#</Table.HeadItem>
            <Table.HeadItem>وضعیت</Table.HeadItem>

            <Table.HeadItem>مقدار</Table.HeadItem>

            <Table.HeadItem>شناسه تراکش</Table.HeadItem>
            <Table.HeadItem>محصولات</Table.HeadItem>

            <Table.HeadItem>تاریخ</Table.HeadItem>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {[1, 2, 3, 4, 5, 6].map((number, index) => (
            <Table.Row key={index}>
              <Table.BodyItem>{index + 1}</Table.BodyItem>
              <Table.BodyItem>
                <span className="px-3 text-sm py-0 bg-green-500 shadow shadow-green-500 text-green-100">
                  موفق
                </span>
              </Table.BodyItem>

              <Table.BodyItem>۱۲۵،۰۰۰ تومان</Table.BodyItem>

              <Table.BodyItem>8884531</Table.BodyItem>

              <Table.BodyItem>
                <PaymentProducts>
                  {[1, 2, 3, 4, 5].map((_) => {
                    return (
                      <PaymentProducts.Product to="/">
                        <img
                          className="w-10 h-10 rounded-full"
                          src="/logo.svg"
                        />
                        <span>کیف سایز بزرگ</span>
                        <span className="border-b-2 border-slate-600 text-slate-600 w-5 h-5 flex justify-center items-center text-xs">
                          ۲۰
                        </span>
                        <span>۱۵۰,۰۰۰ تومان</span>
                      </PaymentProducts.Product>
                    );
                  })}
                </PaymentProducts>
              </Table.BodyItem>

              <Table.BodyItem>۱۴۰۲/۱۰/۱۰ ۱۴:۰۰</Table.BodyItem>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}
