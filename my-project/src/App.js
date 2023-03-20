import { Container } from './layout';
import El from './library/El';
import 'flowbite';
import { login, navbar } from './components';
function App() {
  const app = El({
    element: 'div',
    child: [navbar()],
  });
  return Container(app);
}

export default App;
