export function submit(e) {
  e.preventDefault();
  history.pushState(null, null, '/login');
  console.log(location.pathname);
}

export function NewUser(e) {
  e.preventDefault();
  const target = e.currentTarget;
  const input = target.querySelectorAll('[data-value-form]');
  const [username, email, password] = [...input].map((el) => el.value);
  const obj = {
    ID:Date.now(),
    user:username,
    email:email,
    password:password
  }
  console.log(username, email, password);
}
