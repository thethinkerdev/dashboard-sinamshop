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

export default function CreateCategory() {
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
        <Title>ثبت دسته</Title>

        <ButtonBack status="back" to="/categories">
          بازگشت
        </ButtonBack>
      </div>

      <Form className="mt-3">
        <Box className="space-y-3 space-y-reverse">
          <Label className="block">نام دسته</Label>
          <Input />
        </Box>

        <Box className="mt-3 space-y-3 space-y-reverse">
          <Label className="block">زیر مجموعهٔ دسته</Label>
          <ReactSelect options={options} />
        </Box>

        <Submit>ایجاد دسته</Submit>
      </Form>
    </section>
  );
}
