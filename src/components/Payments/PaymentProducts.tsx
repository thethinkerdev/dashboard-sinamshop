import React, { HTMLAttributes } from "react";
import PaymentProduct from "./PaymentProduct";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function PaymentProducts({ children, ...rest }: Props) {
  return (
    <div className="flex flex-wrap justify-center" {...rest}>
      {children}
    </div>
  );
}


PaymentProducts.Product = PaymentProduct;
