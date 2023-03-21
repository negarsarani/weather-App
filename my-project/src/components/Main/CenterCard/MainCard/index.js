import El from '../../../../library/El';

export function MainCard(data) {
  console.log(data.temp)
  // let dataCard = data
//  console.log(dataCard);
  return El({
    element: 'div',
    className:
      'backdrop-blur-sm bg-slate-300 bg-opacity-30 text-white flex flex-col items-center justify-center px-10 pb-9 pt-5 gap-4 rounded-[1.2rem]',
    child: [
      El({
        element: 'div',
        className: 'flex flex-col items-center justify-center',
        child: [
          El({
            element: 'span',
            className: 'text-[4rem]',
            child: ` C`,
          }),
          El({
            element: 'span',
            className: 'text',
            child: 'Clear',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'text flex gap-5',
        child: [
          El({
            element: 'div',
            className: 'flex flex-col items-center justify-center',
            child: [
              El({
                element: 'span',
                className: 'text-[1.2rem]',
                child: '18 C',
              }),
              El({
                element: 'span',
                className: 'opacity-50 text-[.9rem]',
                child: 'RealFeel',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-center justify-center',
            child: [
              El({
                element: 'span',
                className: 'text-[1.2rem]',
                child: '63%',
              }),
              El({
                element: 'span',
                className: 'opacity-50 text-[.9rem]',
                child: 'Humidity',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
