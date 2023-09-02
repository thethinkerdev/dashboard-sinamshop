import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  to?: string;
  icon?: React.ReactNode;
  text?: string;
}

export default function SidebarItemExit({ children, to, icon, text }: Props) {
  const textElement = to ? (
    <Link to={to ?? "#"}> {children ?? text}</Link>
  ) : (
    children ?? text
  );

  return (
    <li className="p-3 w-[300px] text-rose-500 border-2 bg-rose-100 border-rose-500 flex space-x-4 space-x-reverse items-center mr-1">
      {icon && <span style={{ fontSize: "30px" }}>{icon}</span>}
      {textElement}
    </li>
  );
}
