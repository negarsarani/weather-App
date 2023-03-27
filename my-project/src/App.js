import { Container } from './layout';
import El from './library/El';
import 'flowbite';
import { Main, navbar } from './components';
import { FormPage } from './components/Formpage';
function App() {
  const app = El({
    element: 'div',
    className: 'w-full h-full  ',
    child: [
      // El({
      //   element: 'div',
      //   className: 'w-full flex flex-col h-full items-center ',
      //   child: [navbar(), Main()],
      // }),

      FormPage()
    ],
  });
  return Container(app);
}
export default App;
// import Cookies from 'jc-cookie'
// Cookies.set('token',token)
