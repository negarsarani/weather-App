import El from '../../../../library/El';
import { renderLocation } from '../../../../library/Location';
import { renderMainCard } from '../../../Main/CenterCard/MainCard';
import { CurrentData } from '../../../Main/CenterCard/MainCard/functions';
import { renderDaysCards } from '../../../Main/DaysCards';
import { FutureData } from '../../../Main/DaysCards/functions';

export function Search() {
  const location2 = document.getElementsByClassName('location');
  return El({
    element: 'div',
    className:
      ' flex flex-col items-center w-full items-end bg-red-400 sm:justify-center justify-start  lg:pr-32 pl-10 sm:pl-0 ',
    child: [
      El({
        element: 'input',
        className:
          'backdrop-blur-sm bg-slate-300 bg-opacity-60 outline-none placeholder:text-white text-white p-2 px-3 md:w-6/12 xl:w-6/12 lg:w-8/12  sm:w-7/12 w-10/12 rounded-3xl shadow-md ',
        placeholder: 'Search your city...',
        onchange: function searchValue(e) {
          const card = document.getElementById('card');
          const value = e.target.value;
          const daysCard = document.getElementById('days-cards');
          CurrentData(value).then((data) => {
            [...location2].map((item) => renderLocation(data, item));
            renderMainCard(data, card);
          });
          FutureData(value).then((data) => renderDaysCards(data, daysCard));
        },
        onclick: function searchList() {},
      }),
      
    ],
  });
}
