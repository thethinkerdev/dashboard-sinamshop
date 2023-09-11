import React, { ButtonHTMLAttributes, useMemo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  active?: boolean;
}

export default function Filter({
  text,
  active = false,
  children,
  ...rest
}: Props) {
  const btnClassActivated = useMemo(
    () =>
      active
        ? "shadow-fuchsia-500 border-fuchsia-500 text-fuchsia-500"
        : "border border-gray-300 text-gray-500 shadow-gray-500 shadow",
    [active]
  );

  return (
    <button
      className={`px-3 py-2 shadow-2xl  border ${btnClassActivated} mr-1 mt-1`}
      {...rest}
    >
      {text ?? children}
    </button>
  );
}
