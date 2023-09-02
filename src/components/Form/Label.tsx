import React, { LabelHTMLAttributes } from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export default function Label({ children, ...rest }: Props) {
  return <label {...rest}>{children}</label>;
}
