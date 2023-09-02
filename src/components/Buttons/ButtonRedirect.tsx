import React, { useMemo } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  status: "back" | "edit" | "create";

  children: React.ReactNode;

  //eslint-disable-next-line
  [x: string]: any;
}

export default function ButtonRedirect({
  children,
  to,
  status,
  ...rest
}: Props) {

  const btnClass = useMemo(() => {
    switch (status) {
      case "create": {
        return "border border-green-500 text-green-500 rounded shadow px-3 py-2";
      }

      case "edit": {
        return "border border-fuchsia-500 text-fuchsia-500 rounded shadow px-3 py-2";
      }

      case "back": {
        return "border border-orange-500 text-orange-500 rounded shadow px-3 py-2";
      }
    }
  }, [status]);


  return (
    <Link className={btnClass} {...rest} to={to}>
      {children}
    </Link>
  );
}
