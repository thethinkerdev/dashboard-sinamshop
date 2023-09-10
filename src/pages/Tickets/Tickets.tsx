import ButtonRedirect from "../../components/Buttons/ButtonRedirect";
import ButtonRedirectToEdit from "../../components/Buttons/ButtonRedirectToEdit";
import ButtonTrash from "../../components/Buttons/ButtonTrash";
import Filter from "../../components/Buttons/Filter";
import OrderBy from "../../components/Buttons/OrderBy";
import Table from "../../components/Table";
import Title from "../../components/Title";

export default function Tickets() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0">
        <Title>مدیریت تیکت‌ها</Title>

        <ButtonRedirect status="create" to="/tickets/create">
          افزودن تیکت
        </ButtonRedirect>
      </div>
      <div className="flex items-center justify-between mt-3 flex-wrap">
        <div>
          <OrderBy active>جدیدترین</OrderBy>
          <OrderBy>قدیمی‌ترین</OrderBy>
        </div>

        <div>
          <span>فیلتر :</span>

          <Filter>همه</Filter>
          <Filter>حل نشده</Filter>
          <Filter active>حل شده</Filter>
        </div>
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadItem>#</Table.HeadItem>

            <Table.HeadItem>نام تیکت</Table.HeadItem>

            <Table.HeadItem>کاربر ایجاد کننده</Table.HeadItem>
            <Table.HeadItem>تعداد پاسخ‌ها</Table.HeadItem>

            <Table.HeadItem>عملیات</Table.HeadItem>
            <Table.HeadItem>تاریخ ایجاد</Table.HeadItem>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {[1, 2, 3, 4, 5, 6].map((number, index) => (
            <Table.Row key={index}>
              <Table.BodyItem>{index + 1}</Table.BodyItem>

              <Table.BodyItem>مشکل در پرداخت</Table.BodyItem>
              <Table.BodyItem>User TTD</Table.BodyItem>
              <Table.BodyItem>2</Table.BodyItem>

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
