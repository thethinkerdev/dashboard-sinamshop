import { BsTrash3Fill } from "react-icons/bs";

import React from "react";

interface Props {
  text?: string;
  children?: React.ReactNode;
}

export default function ButtonRedirectToEdit({ children, text = "حذف" }: Props) {
  return (
    <button className="flex-1 px-3 py-2 bg-rose-500  rounded shadow-2xl shadow-rose-500 text-rose-100 flex justify-center space-x-3 space-x-reverse items-center">
      <span>{children ?? text ?? ""}</span>

      <i className="text-2xl">
        <BsTrash3Fill />
      </i>
    </button>
  );
}