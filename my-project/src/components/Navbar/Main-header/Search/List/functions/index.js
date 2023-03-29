import El from '../../../../../../library/El';
import { HistoryLi } from '../../../../../../library/HistoryLi';
import { arrayLocal } from '../../../../../Location';

export function getLocalstorage() {
  const myValue = localStorage.getItem('Items');
  return JSON.parse(myValue);
}

export function setLocalStorage() {
  const array = [...arrayLocal];
  const uniqueArray = array.filter((obj, index, self) => {
    return index === self.findIndex((o) => o.city === obj.city);
  });
  return localStorage.setItem('Items', JSON.stringify(uniqueArray));
}

export function checkHistory() {
  const ul = document.getElementById('ul-history');
  ul.innerHTML = '';
  getLocalstorage() == null
    ? ul.appendChild(
        El({
          element: 'div',
          className: 'flex w-full  justify-center w-full gap-1',

          child: [
            El({
              element: 'img',
              src: './src/styles/assets/svgs/history.svg',
            }),
            El({
              element: 'span',
              className: 'italic ',
              child: 'empty history',
            }),
          ],
        })
      )
      // arrayLocal = ''
    : renderHistoryLi(ul);
}
export function renderHistoryLi(params) {
  const ul = document.getElementById('ul-history');
  let array = getLocalstorage();
  array.length <= 6 ? array : (array = array.slice(-6));
  // ul.innerHTML = '';
  array.map((item) => ul.append(HistoryLi(item.city, item.country)));
}
