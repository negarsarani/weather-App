import El from '../../../../../library/El';
import { checkHistory } from './functions';

export function ListItems() {
  const div = document.getElementById('list-items');
  div.classList.toggle('hidden');
  checkHistory()
}
