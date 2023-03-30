import El from '../../../../library/El';
import { closeLoading } from '../../../../library/Loading';
import { CurrentData } from './functions';

export function MainCard() {
  const card = El({
    element: 'div',
    id: 'card',
  });
  CurrentData()
    .then((data) => {
      renderMainCard(data, card);
      setTimeout(() => {
        closeLoading()
      }, 800);
    })
  return card;
}
export function renderMainCard(arr, elem) {
  elem.innerHTML = '';

  elem.appendChild(
    El({
      element: 'div',
      className:
        'backdrop-blur-sm bg-slate-500 bg-opacity-60 text-white flex flex-col items-center justify-center px-10 pb-9 pt-5 gap-4 rounded-[1.2rem]',
      child: [
        El({
          element: 'div',
          className: 'flex flex-col items-center justify-center',
          child: [
            El({
              element: 'span',
              className: 'text-[4rem]',
              child: `${arr.temp} C`,
            }),
            El({
              element: 'div',
              className: 'flex flex-col items-center justify-center ',
              child: [
                El({
                  element: 'img',
                  className: 'w-20 h-20',
                  src: `http://openweathermap.org/img/wn/${arr.icon}@2x.png`,
                }),
                El({
                  element: 'span',
                  className: 'text',
                  child: `${arr.status}`,
                }),
              ],
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
                  child: `${arr.feels} C`,
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
                  child: `${arr.humid}%`,
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
    })
  );
}
