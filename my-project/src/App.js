import { Container } from './layout';
import El from './library/El';
import 'flowbite';
import { Main, navbar } from './components';
import { FormPage } from './components/Formpage';
import { Route } from './routes';
function App() {
  const app = El({
    element: 'div',
    className: 'w-full h-full  ',
    id: 'routes',
    child: [
      Route(),

      

      // FormPage()
    ],
  });
  return Container(app);
}
export default App;
// import Cookies from 'jc-cookie'
// Cookies.set('token',token)
