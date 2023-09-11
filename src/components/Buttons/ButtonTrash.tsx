import { BsTrash3Fill } from "react-icons/bs";

import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
}

export default function ButtonTrash({
  children,
  text = "حذف",
  ...rest
}: Props) {
  return (
    <button className="flex-1 px-3 py-2 bg-rose-500  rounded shadow-2xl shadow-rose-500 text-rose-100 flex justify-center space-x-1 space-x-reverse items-center" {...rest}>
      <i className="text-2xl">
        <BsTrash3Fill />
      </i>

      <span>{children ?? text ?? ""}</span>
    </button>
  );
}
