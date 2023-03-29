import DayCard from '../../../library/DayCard';
import El from '../../../library/El';
import { FutureData } from './functions';

export function DaysCards() {
  const elem = El({
    element: 'div',
    className:
      ' flex flex-col  sm:flex-row items-center justify-center sm:w-full w-5/12 h-full sm:h-fit sm:p-5 ',
    id: 'days-cards',
  });
  FutureData().then((res) => {
    renderDaysCards(res, elem);
  })
  return elem;
}

export function renderDaysCards(item, elem) {
  elem.innerHTML = '';
  const Cards= item.map((el) =>
     DayCard(el.date, el.temp, el.icon, el.description, el.status)
   );
  const el = El({
    element:"div",
    className:
    "flex flex-col gap-2 sm:w-10/12 md:w-8/12 sm:flex-row items-center justify-center w-28  h-full sm:h-fit sm:p-5 ",
    child:Cards
  });
  elem.append(el);
}
