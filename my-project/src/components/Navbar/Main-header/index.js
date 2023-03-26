import El from '../../../library/El';
import { Search } from './Search';
import { Status_icon } from './Status_icon';

export function Main_header() {
  return El({
    element: 'div',
    className: 'flex  justify-between lg:w-9/12 w-full mt-2 lg:mt-0 z-20',
    child: [Search(), Status_icon()],
  });
}
