import React from "react";

interface Props {
  children?: React.ReactNode;
  text?: string;
}

export default function SidebarLabelItem({ children, text }: Props) {
  return (
    <li className="sticky top-0 inline-block w-[300px] rounded shadow right-0 p-3 text-zinc-200 bg-zinc-900 font-bold uppercase text-sm mr-1">
      {children ?? text}
    </li>
  );
}
