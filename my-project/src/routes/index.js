import Cookies from 'js-cookie';
import { Main, navbar } from '../components';
import { FormPage } from '../components/Formpage';
import { Login } from '../components/Formpage/Login';
import { SingUp } from '../components/Formpage/Signup';
import El from '../library/El';
const isPrivate = (routesEl, child) =>
  Cookies.get('user') && routesEl.appendChild(child);
export function Route() {
  const routes =
    document.getElementById('routes') ||
    El({
      element: 'div',
    });
  routes.innerHTML = '';
  switch (location.pathname) {
    case '/login':
      setTimeout(() => {
        const form = document.getElementById('form');
        Login(form);
      }, 100);
      return routes.appendChild(FormPage());
    case '/signup':
      setTimeout(() => {
        const form = document.getElementById('form');
        SingUp(form);
      }, 100);

      return routes.appendChild(FormPage());
    case '/home':
      return isPrivate(
        routes,
        El({
          element: 'div',
          className: 'w-full flex flex-col h-full items-center ',
          child: [navbar(), Main()],
        })
      );
    default:
      break;
  }
}
