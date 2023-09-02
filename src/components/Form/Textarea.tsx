import React, { TextareaHTMLAttributes, useState } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: React.ReactNode;
  wFull?: boolean;
}

export default function Textarea({ wFull, children, ...rest }: Props) {
  const [value, setValue] = useState<string>("");

  const handleOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <textarea
      className={`px-3 py-1 bg-slate-300/80 rounded shadow shadow-slate-300/80 border-2 outline-none border-solid border-transparent focus:border-green-500 ${wFull ? "w-full" : ""}`}
      {...rest}
      value={value}
      onChange={handleOnChange}
    >
      {children}
    </textarea>
  );
}
