import { Container } from './layout';
import El from './library/El';
import 'flowbite';
import { CenterCard, DaysCards, navbar } from './components';
function App() {
  const app = El({
    element: 'div',
    className: '',
    child: [navbar(), CenterCard(), DaysCards()],
  });
  return Container(app);
}

export default App;
