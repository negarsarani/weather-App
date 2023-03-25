import DayCard from '../../../library/DayCard';
import El from '../../../library/El';
import { FutureData } from './functions';

export function DaysCards() {
  const elem = El({
    element: 'div',
    className: ' flex gap-4 items-center justify-center',
    id:'days-cards',
  });
  FutureData().then((res) => {
    renderDaysCards(res, elem);
  });
  return elem;
}

export function renderDaysCards(item, elem) {
    elem.innerHTML="";
  item.map((el) =>
    elem.append(DayCard(el.date, el.temp, el.icon, el.description, el.status))
  );
}
