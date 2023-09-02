import React, { OptionHTMLAttributes } from "react";

interface Props extends OptionHTMLAttributes<HTMLOptionElement> {
  children?: React.ReactNode;
}

export default function Option({ children, ...rest }: Props) {
  return <option {...rest}>{children}</option>;
}
