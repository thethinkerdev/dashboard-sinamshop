import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  time: string;
}
export default function Message({
  message,
  time,
  ...rest
}: Props): JSX.Element {
  return (
    <div className="px-2 py-2 bg-white shadow rounded-xl ring-2" {...rest}>
      <div className="px-2 rounded flex items-center space-x-4 space-x-reverse">
        <i style={{ fontSize: "30px" }}>
          <BsFillInfoCircleFill />
        </i>
        <p>{message}</p>
      </div>

      <div className="text-left text-sm">{time}</div>
    </div>
  );
}
