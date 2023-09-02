import React, { InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  price?: boolean;
  direction?: "rtl" | "ltr";
}

export default function Input({ price, direction = "rtl", ...rest }: Props) {
  const [value, setValue] = useState<string>("");
  const [maskValue, setMaskValue] = useState<string>("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const originalValue = e.currentTarget.value;

    if (!price) {
      setMaskValue(originalValue);
      setValue(originalValue);
      return;
    }

    // remove ','
    let newValue = originalValue.replace(",", "");

    // remove :space
    newValue = newValue.replace(" ", "");

    // remove '_'
    newValue = newValue.replace("_", "");

    setValue(newValue);
    setMaskValue(originalValue);
  };

  const textAlign = direction === "ltr" ? "text-left" : "text-right";

  return (
    <input
      className={`${textAlign} px-3 py-1 bg-slate-300/80 rounded shadow shadow-slate-300/80 border-2 outline-none border-solid border-transparent focus:border-green-500`}
      {...rest}
      style={{ direction }}
      value={maskValue}
      onChange={handleOnChange}
    />
  );
}
