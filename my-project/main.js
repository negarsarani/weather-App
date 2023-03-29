import './src/styles/style.css';
import 'flowbite';
import App from './src/app.js';
import { Route } from './src/routes';
import { toggleLoading } from './src/library/Loading';
const main = document.getElementById('app');
history.pushState(null, null, '/home');
main.appendChild(App());
// toggleLoading()
Route()
window.addEventListener('popstate',Route)