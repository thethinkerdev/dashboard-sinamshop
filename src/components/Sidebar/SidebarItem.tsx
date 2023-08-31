import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  to?: string;
  icon?: React.ReactNode;
  text?: string;
}

export default function SidebarItem({ children, to, icon, text }: Props) {
  const [isItemActivated, setIsItemActivated] = useState<boolean>(false);
  const textElement = to ? (
    <NavLink
      style={({ isActive }) => {
        if (isActive) {
          setIsItemActivated(true);
          return {};
        } else {
          setIsItemActivated(false);
        }
      }}
      to={to ?? "#"}
    >
      {" "}
      {children ?? text}
    </NavLink>
  ) : (
    children ?? text
  );

  return (
    <li
      className={`p-3 text-zinc-300 flex space-x-4 space-x-reverse items-center w-full  ${
        isItemActivated ? "bg-zinc-800" : ""
      }`}
    >
      {icon && <span style={{ fontSize: "30px" }}>{icon}</span>}
      {textElement}
    </li>
  );
}
