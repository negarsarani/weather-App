import El from '../../library/El';
import { location } from './Location';
import { Main_header } from './Main-header';

export function navbar() {
  return El({
    element: 'div',
    className: 'bg-red-300 flex ',
    child: [location() , Main_header()],
  });
}
export default navbar;
