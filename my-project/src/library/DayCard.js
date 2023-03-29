import El from './El';

function DayCard(date, temp , icon , description, status) {
  return El({
    element: 'div',
    className:
      'bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white flex flex-col items-center justify-center rounded-[1.5rem] h-fit sm:h-full py-1  w-full sm:w-3/12 sm:p-2 sm:text-xl',
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
        className: 'sm:text-lg text-sm ',
        child: `${status}`,
      }),
    ],
  });
}
export default DayCard;
