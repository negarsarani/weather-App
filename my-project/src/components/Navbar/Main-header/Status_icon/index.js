import El from "../../../../library/El";

export function Status_icon() {
    return El({
      element: 'div',
      className: 'backdrop-blur-sm bg-slate-300 bg-opacity-30 flex items-center justify-center rounded-l-lg p-2 px-3',
      child:El({
        element:"img",
        src:"./src/styles/assets/img/sign-in.svg"
      })
    });
  }
  