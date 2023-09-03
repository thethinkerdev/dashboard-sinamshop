import { NavLink } from "react-router-dom";
import ButtonApprove from "../Buttons/ButtonApprove";
import ButtonRedirectToEdit from "../Buttons/ButtonRedirectToEdit";
import ButtonTrash from "../Buttons/ButtonTrash";
import { HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLElement> {
  username: string;
  message: string;
}

export default function Comment({ username, message, ...rest }: Props) {
  return (
    <div
      className="bg-fuchsia-200 rounded shadow shadow-fuchsia-200 p-3"
      {...rest}
    >
      <div className="flex items-center space-x-3 space-x-reverse">
        <img src="/logo.svg" className="w-14 h-14 bg-white rounded-full" />
        <span>{username}</span>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 xl:col-span-9">
          <p className="text-sm">{message}</p>
        </div>
      </div>

      <div className="flex justify-between items-center w-full flex-wrap">
        <div className="flex items-end space-x-2 space-x-reverse flex-wrap">
          <ButtonRedirectToEdit />
          <ButtonTrash />
          <ButtonApprove />
        </div>

        <span className="border-gray-800 text-gray-800 font-bold border-b-2 py-1">
          1400/10/10 23:11:00
        </span>
      </div>
    </div>
  );
}
