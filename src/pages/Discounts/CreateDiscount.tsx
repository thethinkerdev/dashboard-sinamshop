import Title from "../../components/Title";
import ButtonBack from "../../components/Buttons/ButtonRedirect";
import Form from "../../components/Form/Form";
import Box from "../../components/Form/Box";
import Submit from "../../components/Form/Submit";
import Input from "../../components/Form/Input";
import Label from "../../components/Form/Label";
import File from "../../components/Form/File";
import Textarea from "../../components/Form/Textarea";
import ReactSelect from "react-select";

// Ckeditor
import "../../ckeditor/build/ckeditor";
import { useEffect } from "react";

export default function CreateDiscount() {
  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

  useEffect(() => {
    ClassicEditor.create(document.querySelector("#textarea"), {
      simpleUpload: {
        // The URL that the images are uploaded to.
        uploadUrl: "/admin/panel/upload-image",

        // Enable the XMLHttpRequest.withCredentials property.
        withCredentials: true,

        // Headers sent along with the XMLHttpRequest to the upload server.
        headers: {
          "X-CSRF-TOKEN": "CSRF-Token",
          Authorization: "Bearer <JSON Web Token>",
        },
      },
    }).catch((error) => {});
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0 border-b border-solid border-slate-300 pb-4">
        <Title>ثبت تخفیف</Title>

        <ButtonBack status="back" to="/discounts">
          بازگشت
        </ButtonBack>
      </div>

      <Form className="mt-3">
        <Box className="grid grid-cols-2 place-items-center">
          <Box className="space-y-3 space-y-reverse">
            <Label className="block">نام تخفیف</Label>
            <Input />
          </Box>

          <Box className="mt-3 space-y-3 space-y-reverse">
            <Label className="block">قیمت</Label>
            <Input direction="ltr" price placeholder="123,000" />
          </Box>
        </Box>

        <Box className="space-y-3 space-y-reverse">
          <Label className="block">توضیحات</Label>
          <Textarea id="textarea" wFull></Textarea>
        </Box>

        <Box className="grid grid-cols-2 place-items-center">
          <Box className="mt-3 space-y-3 space-y-reverse">
            <Label className="block">تصویر محصول</Label>
            <File />
          </Box>

          <Box className="mt-3 space-y-3 space-y-reverse">
            <Label className="block">دیگر تصاویر محصول</Label>
            <File multiple />
          </Box>
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">دستهٔ محصول</Label>
          <ReactSelect options={options} />
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">ویژگی محصول</Label>
          <ReactSelect options={options} />
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">تخفیف محصول</Label>
          <ReactSelect options={options} />
        </Box>

        <Submit>ایجاد محصول</Submit>
      </Form>
    </section>
  );
}
