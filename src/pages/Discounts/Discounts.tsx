import Title from "../../components/Title";
import Table from "../../components/Table";
import OrderBy from "../../components/Buttons/OrderBy";
import Filter from "../../components/Buttons/Filter";
import ButtonTrash from "../../components/Buttons/ButtonTrash";
import ButtonRedirectToEdit from "../../components/Buttons/ButtonRedirectToEdit";
import ButtonRedirect from "../../components/Buttons/ButtonRedirect";

export default function Discounts() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0">
        <Title>مدیریت تخفیف</Title>

        <ButtonRedirect status="create" to="/discounts/create">
          افزودن تخفیف
        </ButtonRedirect>
      </div>
      <div className="flex items-center justify-between mt-3 flex-wrap">
        <div>
          <OrderBy>جدیدترین</OrderBy>
          <OrderBy active>قدیمی‌ترین</OrderBy>
        </div>

        <div>
          <span>فیلتر :</span>

          <Filter active>فعال</Filter>
          <Filter active>منقضی نشده</Filter>
          <Filter>منقضی شده</Filter>
        </div>
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadItem>#</Table.HeadItem>

            <Table.HeadItem>نام تخفیف</Table.HeadItem>

            <Table.HeadItem>نوع تخفیف</Table.HeadItem>

            <Table.HeadItem>مقدار تخفیف</Table.HeadItem>

            <Table.HeadItem>تاریخ انقضاء</Table.HeadItem>

            <Table.HeadItem>عملیات</Table.HeadItem>

            <Table.HeadItem>تاریخ ایجاد</Table.HeadItem>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {[1, 2, 3, 4, 5, 6].map((number, index) => (
            <Table.Row key={index}>
              <Table.BodyItem>{index + 1}</Table.BodyItem>

              <Table.BodyItem>میلاد امام زمان</Table.BodyItem>

              <Table.BodyItem>درصدی</Table.BodyItem>

              <Table.BodyItem>۵۰٪</Table.BodyItem>
              <Table.BodyItem>۱۴۰۰/۱۰/۱۰ ۲۳:۵۸:۰۰</Table.BodyItem>

              <Table.BodyItem>
                <div className="flex space-x-4 space-x-reverse max-w-[200px] mx-auto">
                  <ButtonRedirectToEdit />
                  <ButtonTrash />
                </div>
              </Table.BodyItem>

              <Table.BodyItem>۱۴۰۲/۱۰/۱۰ ۱۴:۰۰</Table.BodyItem>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}
