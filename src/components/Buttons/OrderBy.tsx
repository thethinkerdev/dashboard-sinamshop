import React, { ButtonHTMLAttributes, useMemo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  active?: boolean;
}

export default function OrderBy({
  text,
  active = false,
  children,
  ...rest
}: Props) {
  const btnClassActivated = useMemo(
    () =>
      active
        ? "px-3 py-2 border border-slate-900 shadow bg-slate-900 text-slate-100"
        : "px-3 py-2 border border-slate-900 shadow-slate-900 active:bg-slate-900 active:text-slate-100",
    [active]
  );

  return (
    <button className={`${btnClassActivated}`} {...rest}>
      {text ?? children}
    </button>
  );
}
