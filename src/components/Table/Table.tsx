import React from "react";
import ButtonTrash from "./ButtonRedirectToEdit";
import ButtonRedirectToEdit from "./ButtonTrash";

interface Props {
  children: React.ReactNode;
}
export default function Table({ children }: Props) {
  return (
    <div className="flex flex-col mt-3">
      <div className="overflow-x-auto">
        <div className="inline-block">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TableRow {
  children: React.ReactNode;
  key: number;
}

Table.Row = function TableRow({ children, key }: TableRow) {
  <tr key={key} className="border-b dark:border-neutral-500">
    {children}
  </tr>;
};

interface TableBody {
  children: React.ReactNode;

  // eslint-disable-next-line
  [x:string]: any
}

Table.Body = function TableBody({ children, ...rest }: TableBody) {
  return (
    <tbody>
        {children}
      {[1, 2, 3, 4, 5, 6].map((number, index) => (
        <Table.Row key={index}>
          <Table.BodyItem>{index + 1}</Table.BodyItem>
          <Table.BodyItem>
            <img className="w-full max-h-[200px]" src="/logo.svg" alt="" />
          </Table.BodyItem>

          <Table.BodyItem>کیف وارداتی تک طرح</Table.BodyItem>
          <Table.BodyItem>۹۰۰،۰۰۰ تومان</Table.BodyItem>
          <Table.BodyItem>
            <span className="px-3 py-2 rounded  shadow-2xl text-zinc-900 border-b-2">
              کیف
            </span>
          </Table.BodyItem>

          <Table.BodyItem>1</Table.BodyItem>
          <Table.BodyItem>Admin</Table.BodyItem>
          <Table.BodyItem>
            <div className="flex space-x-4 space-x-reverse max-w-[200px] mx-auto">
              <ButtonTrash />
              <ButtonRedirectToEdit />
            </div>
          </Table.BodyItem>
          <Table.BodyItem>چهارشنبه، ۲۱ تیر ۰۲</Table.BodyItem>
        </Table.Row>
      ))}
    </tbody>
  );
};
interface Props {
  children: React.ReactNode;
}

Table.BodyItem = function TableBodyItem({ children }: Props) {
  return (
    <td className="whitespace-nowrap  px-6 py-4 font-medium">{children}</td>
  );
};
