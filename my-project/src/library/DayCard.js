import El from './El';

function DayCard(date, temp , icon , description, status) {
  return El({
    element: 'div',
    className:
      'backdrop-blur-sm bg-slate-300 bg-opacity-30 text-white flex flex-col items-center justify-center rounded-[1.5rem] p-5',
    child: [
      El({
        element: 'span',
        child: `${date}`,
      }),
      El({
        element: 'img',
        className: 'w-16 h-16',
        src: `http://openweathermap.org/img/wn/${icon}@2x.png`,
      }),
      El({
        element: 'span',
        child: `${temp} C`,
      }),
      El({
        element: 'span',
        className: 'sm:text-sm text-[.5rem]',
        child: `${description}`,
      }),
    ],
  });
}
export default DayCard;
