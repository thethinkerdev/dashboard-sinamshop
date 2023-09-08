import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  to?: string;
  icon?: React.ReactNode;
  text?: string;
}

export default function SidebarItem({ children, to, icon, text }: Props) {
  return (
    <NavLink
      to={to ?? "#"}
      style={({ isActive }) => {
        return isActive ? { backgroundColor: "#202020" } : {};
      }}
      className="p-3 text-zinc-300 flex space-x-2 space-x-reverse items-center w-full my-3"

      end
    >
      <i>{icon && <span style={{ fontSize: "30px" }}>{icon}</span>}</i>
      <p>{children ?? text}</p>
    </NavLink>
  );
}
