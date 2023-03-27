import El from '../../../../library/El';
import { renderLocation } from '../../../../library/Location';
import { CityCountry } from '../../../Location';
import { renderMainCard } from '../../../Main/CenterCard/MainCard';
import { CurrentData } from '../../../Main/CenterCard/MainCard/functions';
import { renderDaysCards } from '../../../Main/DaysCards';
import { FutureData } from '../../../Main/DaysCards/functions';
import { ListItems } from './List';

export function Search() {
  const location2 = document.getElementsByClassName('location');
  return El({
    element: 'div',
    className:
      ' flex  items-end w-full items-end  lg:justify-center justify-start lg:w-8/12 lg:pl-0 pl-10  ',
    child: El({
      element: 'div',
      className: 'md:w-6/12 xl:w-6/12 lg:w-8/12   sm:w-7/12 w-10/12 relative ',
      child: [
        El({
          element: 'input',
          className:
            'bg-backdrop-blur-sm bg-slate-300 bg-opacity-60 outline-none placeholder:text-white text-white p-2 px-3 w-full rounded-3xl shadow-md  z-20 ',
          placeholder: 'Search your city...',
          onclick: function name() {
            ListItems();
          },
          onchange: function searchValue(e) {
            const card = document.getElementById('card');
            const value = e.target.value;
            const daysCard = document.getElementById('days-cards');
            CityCountry(value);
            CurrentData(value).then((data) => {
              [...location2].map((item) => renderLocation(data, item));
              renderMainCard(data, card);
            });
            FutureData(value).then((data) => renderDaysCards(data, daysCard));
          },
        }),
        El({
          element: 'div',
          id: 'list-items',
          className:
            'hidden absolute w-full flex items-center justify-center z-0',
          child: El({
            element: 'div',
            className: 'bg-[#2C3333] px-10  text-white',
            child: El({
              element: 'ul',
              className: 'flex flex-col',
              child: [
                El({
                  element: 'li',
                  className: '',
                  child: 'salam',
                }),
                El({
                  element: 'li',
                  className: '',
                  child: 'salam',
                }),
                El({
                  element: 'li',
                  className: '',
                  child: 'salam',
                }),
                El({
                  element: 'li',
                  className: '',
                  child: 'salam',
                }),
                El({
                  element: 'li',
                  className: '',
                  child: 'salam',
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
