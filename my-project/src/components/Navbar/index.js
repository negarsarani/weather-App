import El from '../../library/El';
import { location } from './Location';
import { Main_header } from './Main-header';

export function navbar() {
  return El({
    element: 'div',
    className: ' flex ',
    child: [location() , Main_header()],
  });
}
export default navbar;
