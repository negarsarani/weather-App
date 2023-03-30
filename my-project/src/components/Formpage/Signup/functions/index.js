import { postData } from '../../../../library/Fetch/JsonServer';
import { Route } from '../../../../routes';

export function NewUser(e) {
  e.preventDefault();
  const target = e.currentTarget;
  const input = target.querySelectorAll('[data-value-form]');
  const [username, email, password] = [...input].map((el) => el.value);
  const obj = {
    ID: Date.now(),
    user: username,
    email: email,
    password: password,
  };
  postData('http://localhost:3005', 'users', obj);
  history.pushState(null, null, '/login');
  Route();
}
