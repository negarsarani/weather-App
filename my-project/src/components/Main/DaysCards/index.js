import DayCard from '../../../library/DayCard';
import El from '../../../library/El';
import { toggleLoading } from '../../../library/Loading';
import { FutureData } from './functions';

export function DaysCards() {
  const elem = El({
    element: 'div',
    className:
      ' flex flex-col  sm:flex-row items-center justify-center h-36  sm:h-fit ',
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
    "flex flex-col gap-2 sm:w-10/12 md:w-8/12 sm:flex-row items-center justify-center h-36 sm:h-fit ",
    child:Cards
  });
  elem.append(el);
}
