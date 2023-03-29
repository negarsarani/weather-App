import { getJson } from '../../../../library/Fetch/JsonServer';
import { Route } from '../../../../routes';

export async function findUser(e) {
  e.preventDefault();
  const targetValue = e.target;
  const [email, password, remember] = [...targetValue].map((el) => el.value);

  const users = await getJson('http://localhost:3005', 'users');
  const arr = [...users];
  console.log(arr);
  return arr.forEach((item) => {
    if (item.email === email && item.password === password) {
      history.pushState('null', 'null', './home');
      Route();
    } else {
      console.log('not found');
    }
  });
}
