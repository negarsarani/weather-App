import { Container } from './layout';
import El from './library/El';
import 'flowbite';
import { Main, navbar } from './components';
function App() {
  const app = El({
    element: 'div',
    className: ' flex flex-col h-full w-full ',
    // child:"k"
    child: [navbar(), Main()],
  });
  return Container(app);
}
export default App;
