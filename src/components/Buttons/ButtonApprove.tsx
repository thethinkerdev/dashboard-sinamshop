import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import React, { useState } from "react";

interface Props {
  text?: string;
}

export default function ButtonApprove({ text = "تایید" }: Props) {
  const [isApproved, setIsApproved] = useState<boolean>(false);

  return (
    <button className="flex-1 px-3 py-2 bg-green-500 shadow-2xl shadow-green-500 text-green-100 rounded flex justify-center space-x-2 space-x-reverse items-center mt-3">
      <i className="text-2xl">
        {isApproved ? <AiOutlineClose /> : <AiOutlineCheck />}
      </i>

      <span>{text}</span>
    </button>
  );
}
