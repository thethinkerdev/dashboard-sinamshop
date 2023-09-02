import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Submit({ children, ...rest }: Props) {
  return (
    <button
      className="px-3 py-1 bg-green-500 text-green-100 rounded shadow shadow-green-500 w-full"
      {...rest}
    >
      {children}
    </button>
  );
}
