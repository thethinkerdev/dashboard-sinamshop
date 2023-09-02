import React from "react";

interface TableRow {
  children?: React.ReactNode;
}

export default function TableRow({ children }: TableRow) {
  return <tr className="border-b dark:border-neutral-500">{children}</tr>;
}
