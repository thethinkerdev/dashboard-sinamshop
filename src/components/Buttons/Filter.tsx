import React, { ButtonHTMLAttributes, useMemo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

export default function Filter({ active = false, children, ...rest }: Props) {
  const btnClassActivated = useMemo(
    () =>
      active ? "shadow-fuchsia-500 border-fuchsia-500 text-fuchsia-500" : "",
    [active]
  );

  return (
    <button
      className={`px-3 py-2 shadow-2xl  border ${btnClassActivated} mr-1 mt-1`}
      {...rest}
    >
      {children}
    </button>
  );
}
