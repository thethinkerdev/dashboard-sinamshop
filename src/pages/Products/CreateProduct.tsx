import Title from "../../components/Title";
import ButtonBack from "../../components/Buttons/ButtonRedirect";
import Form from "../../components/Form/Form";
import Box from "../../components/Form/Box";
import Submit from "../../components/Form/Submit";
import Input from "./../../components/Form/Input";
import Label from "../../components/Form/Label";
import File from "../../components/Form/File";
import Textarea from "../../components/Form/Textarea";
import Select from "../../components/Form/Select/Select";

export default function CreateProduct() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0 border-b border-solid border-slate-300 pb-4">
        <Title>ثبت محصول</Title>

        <ButtonBack status="back" to="/products">
          بازگشت
        </ButtonBack>
      </div>

      <Form className="mt-3">
        <Box className="grid grid-cols-2 place-items-center">
          <Box className="space-y-3 space-y-reverse">
            <Label className="block">نام مقاله</Label>
            <Input />
          </Box>

          <Box className="mt-3 space-y-3 space-y-reverse">
            <Label className="block">قیمت</Label>
            <Input type="number" />
          </Box>
        </Box>

        <Box className="space-y-3 space-y-reverse">
          <Label className="block">توضیحات</Label>
          <Textarea wFull></Textarea>
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">تصویر محصول</Label>
          <File />
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">دیگر تصاویر محصول</Label>
          <File multiple />
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">دستهٔ محصول</Label>
          <Select>
            <Select.Option>شال</Select.Option>
            <Select.Option>کیف</Select.Option>
          </Select>
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">ویژگی محصول</Label>
          <Select>
            <Select.Option>گوگولی دات کام</Select.Option>
            <Select.Option>مرغوب</Select.Option>
          </Select>
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">تخفیف محصول</Label>
          <Select>
            <Select.Option>تخفیف ٪۲۰</Select.Option>
            <Select.Option>تخفیف ٪۹۹ میلاد حضرت علی</Select.Option>
          </Select>
        </Box>

        <Submit>ایجاد محصول</Submit>
      </Form>
    </section>
  );
}
