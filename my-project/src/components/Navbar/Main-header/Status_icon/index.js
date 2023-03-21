import El from "../../../../library/El";

export function Status_icon() {
    return El({
      element: 'div',
      className: 'bg-[#9A9A9A] flex items-center justify-center rounded-l-lg p-2 px-3',
      child:El({
        element:"img",
        src:"./src/styles/assets/svgs/sign-in.svg"
      })
    });
  }
  