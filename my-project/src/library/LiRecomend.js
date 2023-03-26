import El from './El';

export function LiList(params) {
  return El({
    element: 'div',
    className: 'backdrop-blur-sm bg-slate-300 bg-opacity-30 text-white flex justify-between',
    child: [
      El({
        element: 'span',
        className: `theran , iran`,
      }),
      El({
        element: 'img',
        className: 'hidden hover:flex',
        src: './src/styles/assets/svgs/close.svg',
      }),
    ],
  });
}
