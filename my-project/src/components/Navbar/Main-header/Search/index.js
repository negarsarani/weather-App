import El from "../../../../library/El";

export function Search() {
    return El({
      element: 'div',
      className: ' flex items-center  bg-red-200 w-full items-center sm:justify-center  justify-start pl-4 sm:pl-0 ',
      child:El({
        element:"input",
        className: "backdrop-blur-sm bg-slate-300 bg-opacity-30 outline-none placeholder:text-white text-white p-2 px-3 md:w-6/12 lg:w-6/12 sm:w-7/12 w-10/12 rounded-3xl shadow-md ",
        placeholder:"Search your city..."
      })
    });
  }
  