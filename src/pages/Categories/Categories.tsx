import ButtonRedirect from "../../components/Buttons/ButtonRedirect";
import ButtonRedirectToEdit from "../../components/Buttons/ButtonRedirectToEdit";
import ButtonTrash from "../../components/Buttons/ButtonTrash";
import Filter from "../../components/Buttons/Filter";
import OrderBy from "../../components/Buttons/OrderBy";
import Table from "../../components/Table";
import Title from "../../components/Title";

export default function Categories() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0">
        <Title>مدیریت دسته‌ها</Title>

        <ButtonRedirect status="create" to="/categories/create">
          افزودن تخفیف
        </ButtonRedirect>
      </div>
      <div className="flex items-center justify-between mt-3 flex-wrap">
        <div>
          <OrderBy active>جدیدترین</OrderBy>
          <OrderBy>قدیمی‌ترین</OrderBy>
        </div>

        <div>
          <span>فیلتر :</span>

          <Filter>سر دسته</Filter>
        </div>
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadItem>#</Table.HeadItem>

            <Table.HeadItem>نام دسته</Table.HeadItem>

            <Table.HeadItem>عملیات</Table.HeadItem>

            <Table.HeadItem>تاریخ ایجاد</Table.HeadItem>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {[1, 2, 3, 4, 5, 6].map((number, index) => (
            <Table.Row key={index}>
              <Table.BodyItem>{index + 1}</Table.BodyItem>

              <Table.BodyItem>میلاد امام زمان</Table.BodyItem>

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
