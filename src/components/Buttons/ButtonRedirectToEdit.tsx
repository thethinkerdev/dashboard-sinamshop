import { AiFillEdit } from "react-icons/ai";

import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
}

export default function ButtonRedirectToEdit({
  children,
  text = "ویرایش",
  ...rest
}: Props) {
  return (
    <button className="flex-1 px-3 py-2 bg-transparent border border-blue-500 shadow-2xl shadow-blue-500 text-blue-500 flex justify-center space-x-1 space-x-reverse items-center" {...rest}>
      <i className="text-2xl">
        <AiFillEdit />
      </i>

      <span>{children ?? text ?? ""}</span>
    </button>
  );
}
