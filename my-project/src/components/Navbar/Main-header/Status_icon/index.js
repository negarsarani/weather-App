import El from "../../../../library/El";
import { logout } from "./functions";

export function Status_icon() {
    return El({
      element: 'div',
      className: ' cursor-pointer flex items-end justify-end lg:w-4/12 w-2/12 ',
      eventListener: [
        {
          event: 'click',
          callback: logout,
        },
      ],
      child:El({
        element:"img",
        className: "bg-[#9A9A9A]  rounded-l-lg p-2 px-3",
        src:"./src/styles/assets/svgs/sign-in.svg"
      })
    });
  }
  