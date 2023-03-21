import El from "./El";

function location(className){
  return El({
    element: 'div',
    className:
     `${className}  justify-center  backdrop-blur-sm bg-slate-300 bg-opacity-30 text-white text-2xl py-2`,
    child: El({
      element: 'span',
      className: 'p-1',
      child: 'Tehran , Iran',
    }),
  });
}
export default location;
