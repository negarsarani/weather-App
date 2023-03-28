import { getJson } from '../../../../library/Fetch/JsonServer';

export async function findUser(e) {
  e.preventDefault();
  const targetValue = e.target;
  const [email, password, remember] = [...targetValue].map((el) => el.value);

  const users = await getJson('http://localhost:3005', 'users');
  const arr = [...users];
  console.log(email);
  return arr.forEach((item) => {
    console.log(item);
    if (item.email === email && item.password === password) {
      console.log(item);
    } else {
      console.log('not found');
    }
  });
  //   console.log(arr);
}
