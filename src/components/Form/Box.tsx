import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Box({ children, ...rest }: Props) {
  return <div {...rest}>{children}</div>;
}
