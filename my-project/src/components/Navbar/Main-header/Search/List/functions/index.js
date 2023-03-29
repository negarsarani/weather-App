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
