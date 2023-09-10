import Title from "../../components/Title";
import ButtonBack from "../../components/Buttons/ButtonRedirect";
import Form from "../../components/Form/Form";
import Box from "../../components/Form/Box";
import Submit from "../../components/Form/Submit";
import Input from "../../components/Form/Input";
import Label from "../../components/Form/Label";
import "jalaali-react-date-picker/lib/styles/index.css";
import { InputDatePicker } from "jalaali-react-date-picker";
import ReactSelect from "react-select";

export default function CreateDiscount() {
  const options = [
    { value: "percent", label: "درصدی" },
    { value: "money", label: "قیمتی" },
  ];

  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0 border-b border-solid border-slate-300 pb-4">
        <Title>ثبت تخفیف</Title>

        <ButtonBack status="back" to="/discounts">
          بازگشت
        </ButtonBack>
      </div>

      <Form className="mt-3">
        <Box className="space-y-3 space-y-reverse">
          <Label className="block">نام تخفیف</Label>
          <Input />
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">نوع تخفیف</Label>
          <ReactSelect options={options} />
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">مقدار تخفیف</Label>
          <Input />
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">تاریخ انقضاء</Label>
          <InputDatePicker />
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block flex items-center space-x-2 space-x-reverse">
            <span>فعال</span>
            <input type="checkbox" />
          </Label>
        </Box>

        <Submit>ایجاد محصول</Submit>
      </Form>
    </section>
  );
}
