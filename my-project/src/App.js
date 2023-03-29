import { Container } from './layout';
import El from './library/El';
import 'flowbite';
import { Main, navbar } from './components';
import { FormPage } from './components/Formpage';
import { Route } from './routes';
import { toggleLoading } from './library/Loading';

function App() {
  const app = [
    El({
      element: 'div',
      className: 'w-full h-full z-[100] absolute ',
      id: 'routes',
      child: Route(),
    }),
    El({
      element: 'div',
      className:
        'invisible h-screen z-[1000] absolute inset-x-0 flex items-center justify-center shadow-2xl ',
      id: 'loading',
    }),
  ];
  return Container(app);
}
export default App;
// import Cookies from 'jc-cookie'
// Cookies.set('token',token)
