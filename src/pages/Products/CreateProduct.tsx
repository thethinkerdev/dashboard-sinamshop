import Title from "../../components/Title";
import ButtonBack from "../../components/Buttons/ButtonRedirect";

export default function CreateProduct() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0 border-b border-solid border-slate-300 pb-4">
        <Title>ثبت محصول</Title>

        <ButtonBack status="back" to="/products">
          بازگشت
        </ButtonBack>
      </div>
    </section>
  );
}
