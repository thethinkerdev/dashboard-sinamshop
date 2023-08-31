import React from "react";

interface Props {
  children?: React.ReactNode;
  to?: string;
  icon?: React.ReactNode;
  text?: string;
}

export default function SidebarItem({ children, to, icon, text }: Props) {
  const textElement = to ? (
    <a href={to ?? "#"}> {children ?? text}</a>
  ) : (
    children ?? text
  );

  return (
    <li className="p-3 text-zinc-300 flex space-x-4 space-x-reverse items-center">
      {icon && <span style={{ fontSize: "30px" }}>{icon}</span>}
      {textElement}
    </li>
  );
}
