import { TableHTMLAttributes } from "react";

interface Props extends TableHTMLAttributes<HTMLTableCellElement>{
  children?: React.ReactNode;
}

export default function TableBodyItem({ children, ...rest }: Props) {
  return (
    <td className="whitespace-nowrap  px-6 py-4 font-medium" {...rest}>{children}</td>
  );
}
