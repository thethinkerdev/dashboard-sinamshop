import Title from "../../components/Title";
import Table from "../../components/Table";
import ButtonTrash from "../../components/Buttons/ButtonRedirectToEdit";
import ButtonRedirectToEdit from "../../components/Buttons/ButtonTrash";
import TableHeadItem from "../../components/Table/TableHeadItem";
import ButtonRedirect from "../../components/Buttons/ButtonRedirect";

export default function Users() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0">
        <Title>مدیریت کاربران</Title>

        <ButtonRedirect status="create" to="/users/create">
          افزودن کاربر
        </ButtonRedirect>
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
            ایمیل تایید شده
          </button>
          <button className="px-3 py-2 shadow-2xl shadow-fuchsia-500 border">
            کاربران مدیریت
          </button>
        </div>
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadItem>#</Table.HeadItem>
            <Table.HeadItem>تصویر</Table.HeadItem>
            <Table.HeadItem>نام</Table.HeadItem>

            <Table.HeadItem>ایمیل</Table.HeadItem>

            <Table.HeadItem>تلفن همراه</Table.HeadItem>

            <Table.HeadItem>عملیات</Table.HeadItem>
            <TableHeadItem>تاریخ ایجاد</TableHeadItem>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {[1, 2, 3, 4, 5, 6].map((number, index) => (
            <Table.Row key={index}>
              <Table.BodyItem>{index + 1}</Table.BodyItem>
              <Table.BodyItem>
                <img className="w-full max-h-[150px]" src="/logo.svg" alt="" />
              </Table.BodyItem>

              <Table.BodyItem>محمد</Table.BodyItem>
              <Table.BodyItem>admin@root.com</Table.BodyItem>
              <Table.BodyItem>۰۹۰۳۴۰۹۹۳۲۵</Table.BodyItem>
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
