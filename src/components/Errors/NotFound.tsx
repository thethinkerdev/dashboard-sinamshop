import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mt-10 pr-80 justify-center flex  flex-col justify-around items-center">
      <h1 className="text-4xl text-center">صفحهٔ مورد نظر یافت نشد</h1>
      <Link
        className="border  text-slate-500 bg--500 px-3 py-2 rounded shadow inline-block w-[200px] text-center mt-10"
        to="/"
      >
        صفحهٔ اصلی
      </Link>
    </div>
  );
}
