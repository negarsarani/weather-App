import { arrayLocal } from '../../../../Location';

export function LocalStorage(items) {
  const array = [...arrayLocal];
  const uniqueArray = array.filter((obj, index, self) => {
    return index === self.findIndex((o) => o.city === obj.city);
  });
  localStorage.setItem('Items', JSON.stringify(uniqueArray));
}

export function localStoragepp() {
  const myValue = localStorage.getItem('Items');
  return JSON.parse(myValue);
}
