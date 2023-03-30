import { getJson } from '../../../../library/Fetch/JsonServer';
import { Route } from '../../../../routes';
import Cookies from 'js-cookie';
export async function findUser(e) {
  e.preventDefault();
  const targetValue = e.target;
  const [email, password, remember] = [...targetValue].map((el) => el.value);

  const users = await getJson('http://localhost:3005', 'users');
  const arr = [...users];
  console.log(arr);
  return arr.forEach((item) => {
    if (item.email === email && item.password === password) {
      Cookies.set('user', `${item.email}`, { expires: 1, path: '/' });
      history.pushState('null', 'null', './home');
      Route();
    } else {
      console.log('not found');
    }
  });
}
