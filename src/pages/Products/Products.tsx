import Title from "../../components/Title";
import Table from "../../components/Table";
import ButtonTrash from "../../components/Buttons/ButtonRedirectToEdit";
import ButtonRedirectToEdit from "../../components/Buttons/ButtonTrash";
import TableHeadItem from "../../components/Table/TableHeadItem";
import ButtonRedirect from "../../components/Buttons/ButtonRedirect";
import Filter from "../../components/Buttons/Filter";
import OrderBy from "../../components/Buttons/OrderBy";

export default function Products() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0">
        <Title>مدیریت محصولات</Title>

        <ButtonRedirect status="create" to="/products/create">
          افزودن محصول
        </ButtonRedirect>
      </div>
      <div className="flex items-center justify-between mt-3 flex-wrap">
        <div>
          <OrderBy active>جدیدترین</OrderBy>
          <OrderBy>قدیمی ترین</OrderBy>
        </div>

        <div>
          <span>فیلتر :</span>
          <Filter active>بیشترین فروش</Filter>
          <Filter>بدون خرید</Filter>
          <Filter active>بدون موجودی</Filter>
        </div>
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadItem>#</Table.HeadItem>
            <Table.HeadItem>تصویر محصول</Table.HeadItem>

            <Table.HeadItem>نام محصول</Table.HeadItem>

            <Table.HeadItem>قیمت</Table.HeadItem>

            <Table.HeadItem>دسته‌ٔ محصول</Table.HeadItem>

            <Table.HeadItem>تعداد</Table.HeadItem>
            <Table.HeadItem>فروشنده</Table.HeadItem>

            <Table.HeadItem>عملیات</Table.HeadItem>
            <TableHeadItem>تاریخ ایجاد</TableHeadItem>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {[1, 2, 3, 4, 5, 6].map((number, index) => (
            <Table.Row key={index}>
              <Table.BodyItem>{index + 1}</Table.BodyItem>
              <Table.BodyItem>
                <img className="w-full max-h-[200px]" src="/logo.svg" alt="" />
              </Table.BodyItem>

              <Table.BodyItem>کیف وارداتی تک طرح</Table.BodyItem>
              <Table.BodyItem>۹۰۰،۰۰۰ تومان</Table.BodyItem>
              <Table.BodyItem>
                <span className="px-3 py-2 rounded  shadow-2xl text-zinc-900 border-b-2">
                  کیف
                </span>
              </Table.BodyItem>

              <Table.BodyItem>1</Table.BodyItem>
              <Table.BodyItem>Admin</Table.BodyItem>
              <Table.BodyItem>
                <div className="flex space-x-4 space-x-reverse max-w-[200px] mx-auto">
                  <ButtonTrash />
                  <ButtonRedirectToEdit />
                </div>
              </Table.BodyItem>
              <Table.BodyItem>چهارشنبه، ۲۱ تیر ۰۲</Table.BodyItem>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}
