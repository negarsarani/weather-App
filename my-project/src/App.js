import El from './library/El';
import 'flowbite';
import { login } from './components';
export function app(params) {
  return El({
    element: 'div',
    child: login(),
  });
}
