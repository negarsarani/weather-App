import El from '../../../library/El';

export function location() {
  return El({
    element: 'div',
    className: 'hidden lg:flex justify-center  backdrop-blur-sm bg-slate-300 bg-opacity-30 text-white text-2xl rounded-r-xl py-2 w-3/12 mt-3',
    child:El({
      element:"span",
      className:"p-1",
      child:"Tehran , Iran"
    })
  });
}
