import El from "../../../../library/El";

export function Status_icon() {
    return El({
      element: 'div',
      className: ' flex items-end justify-center',
      child:El({
        element:"img",
        className: "bg-[#9A9A9A]  rounded-l-lg p-2 px-3",
        src:"./src/styles/assets/svgs/sign-in.svg"
      })
    });
  }
  