
import { AiFillEdit } from "react-icons/ai";

import React from "react";

interface Props {
  text?: string;
  children?: React.ReactNode;
}

export default function ButtonTrash({ children, text = "ویرایش" }: Props) {
  return (
    <button className="flex-1 px-3 py-2 bg-transparent border border-blue-500 shadow-2xl shadow-blue-500 text-blue-500 flex justify-center space-x-3 space-x-reverse items-center">
      <span>{children ?? text ?? ""}</span>

      <i className="text-2xl">
        <AiFillEdit />
      </i>
    </button>
  );
}
