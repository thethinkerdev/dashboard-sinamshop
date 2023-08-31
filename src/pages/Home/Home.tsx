import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0">
        <h1 className="text-4xl font-bold">مدیریت محصولات</h1>

        <Link
          className="border border-green-500 text-green-500 rounded shadow px-3 py-2"
          to="/products/create"
        >
          افزودن محصول
        </Link>
      </div>
    </section>
  );
}
