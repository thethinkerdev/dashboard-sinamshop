import React, { FormHTMLAttributes } from "react";

interface Props extends FormHTMLAttributes<HTMLFormElement>{
  children: React.ReactNode;

}

export default function Form({ children, ...rest}: Props) {
  return <form {...rest}>{children}</form>;
}
