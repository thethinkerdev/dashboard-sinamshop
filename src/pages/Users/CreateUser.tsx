import Title from "../../components/Title";
import ButtonBack from "../../components/Buttons/ButtonRedirect";
import Form from "../../components/Form/Form";
import Box from "../../components/Form/Box";
import Submit from "../../components/Form/Submit";
import Input from "../../components/Form/Input";
import Label from "../../components/Form/Label";
import File from "../../components/Form/File";

export default function CreateUser() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0 border-b border-solid border-slate-300 pb-4">
        <Title>ثبت کاربر</Title>

        <ButtonBack status="back" to="/users">
          بازگشت
        </ButtonBack>
      </div>

      <Form className="mt-3">
        <Box className="grid grid-cols-3 place-items-center">
          <Box className="space-y-3 space-y-reverse">
            <Label className="block">نام</Label>
            <Input direction="ltr" placeholder="name..." />
          </Box>

          <Box className="mt-3 space-y-3 space-y-reverse">
            <Label className="block">ایمیل</Label>
            <Input direction="ltr" placeholder="my@email.com" />
          </Box>

          <Box className="mt-3 space-y-3 space-y-reverse">
            <Label className="block">تلفن همراه</Label>
            <Input direction="ltr" placeholder="090xxxxxxxx" />
          </Box>
        </Box>

        <Box className="grid grid-cols-2 place-items-center">
          <Box className="mt-3 space-y-3 space-y-reverse">
            <Label className="block">پسورد</Label>
            <Input direction="ltr" placeholder="***-***-***" />
          </Box>

          <Box className="mt-3 space-y-3 space-y-reverse">
            <Label className="block">تکرار پسورد</Label>
            <Input direction="ltr" placeholder="***-***-***" />
          </Box>
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">تصویر کاربر</Label>
          <File />
        </Box>

        <Submit>ایجاد کاربر</Submit>
      </Form>
    </section>
  );
}
