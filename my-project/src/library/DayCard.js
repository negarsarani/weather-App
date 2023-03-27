import El from './El';

function DayCard(date, temp , icon , description, status) {
  return El({
    element: 'div',
    className:
      'backdrop-blur-sm bg-slate-300 bg-opacity-30 text-white flex flex-col items-center justify-center rounded-[1.5rem] px-5 w-full h-full py-10 ',
    child: [
      El({
        element: 'span',
        child: `${date}`,
      }),
      El({
        element: 'img',
        className: 'sm:w-16 sm:h-16 w-14 h-14',
        src: `http://openweathermap.org/img/wn/${icon}@2x.png`,
      }),
      El({
        element: 'span',
        child: `${temp} C`,
      }),
      El({
        element: 'span',
        className: 'sm:text-sm',
        child: `${status}`,
      }),
    ],
  });
}
export default DayCard;
