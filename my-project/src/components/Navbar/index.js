import El from '../../library/El';
import location from '../../library/Location';
import { Main_header } from './Main-header';

export function navbar() {
  return El({
    element: 'div',
    className: ' flex ',
    child: [location("hidden lg:flex  w-3/12 mt-3 rounded-r-xl ") , Main_header()],
  });
}
export default navbar;
