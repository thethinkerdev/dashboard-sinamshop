import React, { SelectHTMLAttributes } from "react";
import Option from "./Option";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}
export default function Select({ children, ...rest }: Props) {
  return <select
  className="w-full bg-rose-500"
  
  {...rest}>{children}</select>;
}

Select.Option = Option;
