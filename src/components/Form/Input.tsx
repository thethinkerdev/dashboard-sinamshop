import React, { InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: Props) {
  const [value, setValue] = useState<string>("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <input
      className="px-3 py-1 bg-slate-300/80 rounded shadow shadow-slate-300/80 border-2 outline-none border-solid border-transparent focus:border-green-500"
      {...rest}
      value={value}
      onChange={handleOnChange}
    />
  );
}
