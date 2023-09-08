import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  to: string;
}
export default function PaymentProduct({ to, children, ...rest }: Props) {
  return (
    <Link
      className="m-0.5 bg-slate-300 w-max rounded shadow flex items-center space-x-2 space-x-reverse px-3 py-0"
      {...rest}
      to={to}
    >
      {children}
    </Link>
  );
}
