import Title from "../../components/Title";
import ButtonBack from "../../components/Buttons/ButtonRedirect";
import Form from "../../components/Form/Form";
import Box from "../../components/Form/Box";
import Submit from "../../components/Form/Submit";
import Input from "../../components/Form/Input";
import Label from "../../components/Form/Label";
import "jalaali-react-date-picker/lib/styles/index.css";
import File from "../../components/Form/File";
import Textarea from "../../components/Form/Textarea";

export default function ChangePassword() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0 border-b border-solid border-slate-300 pb-4">
        <Title>تغییر پسورد</Title>

        <ButtonBack status="back" to="/">
          بازگشت
        </ButtonBack>
      </div>

      <Form className="mt-3">
        <Box className="space-y-3 space-y-reverse">
          <Label className="block">پسورد حال حاضر</Label>
          <Input />
        </Box>

        <Box className="space-y-3 space-y-reverse">
          <Label className="block">پسورد جدید</Label>
          <Input type="password" />
        </Box>

        <Box className="space-y-3 space-y-reverse">
          <Label className="block">تکرار پسورد</Label>
          <Input type="password" />
        </Box>

        <Submit>ویرایش اطلاعات</Submit>
      </Form>
    </section>
  );
}
