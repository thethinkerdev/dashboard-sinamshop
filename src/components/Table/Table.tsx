import React from "react";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableBodyItem from "./TableBodyItem";
import TableHead from "./TableHead";
import TableHeadItem from "./TableHeadItem";

interface Props {
  children?: React.ReactNode;
}
export default function Table({ children }: Props) {
  return (
    <div className="flex flex-col mt-3 w-full">
      <div className="overflow-x-auto w-full">
        <div className="inline-block w-full">
          <div className="overflow-hidden w-full">
            <table className="min-w-full text-center text-sm font-light">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

Table.Body = TableBody;
Table.Row = TableRow;
Table.BodyItem = TableBodyItem;

Table.Head = TableHead;
Table.HeadItem = TableHeadItem;
