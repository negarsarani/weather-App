export function submit(e) {
  e.preventDefault();
  history.pushState(null, null, '/login');
  console.log(location.pathname);
}

export function NewUser(e) {
  const target = e.currentTarget;
  const input = target.querySelectorAll('[data-value-form]');
  const [username, email, password] = [...input].map((el) => el.value);
  console.log(username, email, password);
}
