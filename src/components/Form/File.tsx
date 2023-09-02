import React from "react";
import "./File.css"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function File({ ...rest }: Props) {
  return <input type="file" {...rest} />;
}
