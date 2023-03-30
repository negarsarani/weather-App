import './src/styles/style.css';
import 'flowbite';
import App from './src/app.js';
import { Route } from './src/routes';
import { openLoading } from './src/library/Loading';
import Cookies from 'js-cookie';
const main = document.getElementById('app');
// history.pushState(null, null, '/login');
// main.appendChild(App());
main.appendChild(App());
if (Cookies.get('user')) {
    openLoading()
  history.pushState(null, null, '/home');
} else {
  history.pushState(null, null, '/login');
}
Route();
window.addEventListener('popstate', Route);
