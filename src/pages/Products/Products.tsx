import Title from "../../components/Title";
import Table from "../../components/Table";
import ButtonTrash from "../../components/Buttons/ButtonTrash";
import ButtonRedirectToEdit from "../../components/Buttons/ButtonRedirectToEdit";
import TableHeadItem from "../../components/Table/TableHeadItem";
import ButtonRedirect from "../../components/Buttons/ButtonRedirect";
import Filter from "../../components/Buttons/Filter";
import OrderBy from "../../components/Buttons/OrderBy";
import { useEffect, useState } from "react";

interface ImageList {
  images: [];
  thumb: string;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

interface IProduct {
  id: number;
  body: string;
  commentCount: number;
  created_at: string;
  description: string;
  price: number;
  slug: string;
  images: ImageList;
  title: string;
  updated_at: string;
  user: IUser;
  viewCount: number;
  quantity: number;
}

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [orderBy, setOrderBy] = useState<"desc" | "asc">("desc");

  const [isFilterActivated, setIsFilterActivated] = useState<boolean>(false);

  const [filters, setFilters] = useState<{ noQuantity: boolean }>({
    noQuantity: false,
  });

  const handleGetProducts = async () => {
    setFilters({ noQuantity: false });

    setIsFilterActivated(false);
    const response = await fetch("http://127.0.0.1:8000/api/products");

    const { data } = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  const parseDate = (d: string) => {
    const date = new Date(d);
    return new Intl.DateTimeFormat("fa-IR", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(date);
  };

  const handleOrderByASC = () => setOrderBy("asc");

  const handleOrderByDESC = () => setOrderBy("desc");

  const handleNoQuantity = () => {
    setProducts((state) => {
      return state.filter((product) => {
        return product.quantity == 0;
      });
    });
  };

  const handleDelete = async (product: IProduct) => {

    const response = await fetch(
      `http://127.0.0.1:8000/api/products/${product.id}`,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();

    console.log(json.data.message);
  };
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap space-y-5 sm:space-y-0">
        <Title>مدیریت محصولات</Title>

        <ButtonRedirect status="create" to="/products/create">
          افزودن محصول
        </ButtonRedirect>
      </div>
      <div className="flex items-center justify-between mt-3 flex-wrap">
        <div>
          <OrderBy
            active={orderBy === "desc"}
            onClick={handleOrderByDESC}
            text="جدیدترین"
          />

          <OrderBy
            active={orderBy === "asc"}
            onClick={handleOrderByASC}
            text="قدیمی ترین"
          />
        </div>

        <div>
          <span>فیلتر :</span>

          {isFilterActivated && (
            <button
              className="px-3 py-1 bg-orange-200 text-orange-500 rounded shadow"
              onClick={handleGetProducts}
            >
              بازنشانسی فیلتر‌ها
            </button>
          )}
          <Filter
            onClick={() => {
              handleNoQuantity();
              setIsFilterActivated(true);
              setFilters({ noQuantity: true });
            }}
            active={filters.noQuantity}
            text="بدون موجودی"
          />
        </div>
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadItem>#</Table.HeadItem>
            <Table.HeadItem>تصویر محصول</Table.HeadItem>

            <Table.HeadItem>نام محصول</Table.HeadItem>

            <Table.HeadItem>قیمت</Table.HeadItem>

            <Table.HeadItem>تعداد</Table.HeadItem>
            <Table.HeadItem>فروشنده</Table.HeadItem>

            <Table.HeadItem>عملیات</Table.HeadItem>
            <TableHeadItem>آخرین ویرایش</TableHeadItem>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {products
            .sort((a, b) => {
              const d1 = new Date(a.updated_at).getTime();
              const d2 = new Date(b.updated_at).getTime();

              return orderBy == "asc" ? (d1 < d2 ? -1 : 1) : d2 > d1 ? 1 : -1;
            })
            .map((product, index) => (
              <Table.Row key={product.id}>
                <Table.BodyItem>{index + 1}</Table.BodyItem>
                <Table.BodyItem>
                  <img
                    className="w-full max-h-[200px]"
                    src={product.images.thumb}
                    alt=""
                  />
                </Table.BodyItem>

                <Table.BodyItem>{product.title}</Table.BodyItem>
                <Table.BodyItem>{product.price} تومان</Table.BodyItem>

                <Table.BodyItem>{product.quantity}</Table.BodyItem>
                <Table.BodyItem>{product.user.name}</Table.BodyItem>
                <Table.BodyItem>
                  <div className="flex space-x-4 space-x-reverse max-w-[200px] mx-auto">
                    <ButtonTrash onClick={() => handleDelete(product)} />

                    <ButtonRedirectToEdit />
                  </div>
                </Table.BodyItem>
                <Table.BodyItem>{parseDate(product.updated_at)}</Table.BodyItem>
                {/* <Table.BodyItem>چهارشنبه، ۲۱ تیر ۰۲</Table.BodyItem> */}
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </section>
  );
}
