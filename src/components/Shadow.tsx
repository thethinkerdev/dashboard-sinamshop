import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
}
export default function Shadow({ onClick, ...rest }: Props) {
  return (
    <div
      id="shadow"
      className="w-full h-full fixed top-0 right-0 bg-gray-500/90 z-10"
      {...rest}
      onClick={onClick}
    ></div>
  );
}
