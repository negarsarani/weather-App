import El from '../../library/El';
import location from '../../library/Location';
import { Main_header } from './Main-header';
import { Search } from './Main-header/Search';
import { Status_icon } from './Main-header/Status_icon';

export function navbar() {
  return El({
    element: 'div',
    className: ' flex  w-full',
    child: [
      location("hidden justify-end lg:flex  lg:w-3/12 mt-3 rounded-r-xl ") 
      , Main_header()],
  });
}
export default navbar;
