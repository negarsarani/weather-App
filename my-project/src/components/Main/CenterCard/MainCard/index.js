import El from '../../../../library/El';

export function MainCard() {
  return El({
    element: 'div',
    className:
      'backdrop-blur-sm bg-slate-300 bg-opacity-30 text-white flex flex-col items-center justify-center ',
    child: [
      El({
        element: 'span',
        className: 'text-[3.5rem]',
        child: '20 C',
      }),
      El({
        element: 'span',
        className: 'text',
        child: 'Clear',
      }),
      El({
        element: 'div',
        className: 'text flex gap-3',
        child: [
          El({
            element: 'div',
            className: 'flex flex-col items-center justify-center',
            child: [
              El({
                element: 'span',
                child: '18 C',
              }),
              El({
                element: 'span',
                child: 'RealFeel',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col',
            child: [
              El({
                element: 'span',
                child: '63%',
              }),
              El({
                element: 'span',
                child: 'Humidity',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
