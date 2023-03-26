import { CurrentData } from '../components/Main/CenterCard/MainCard/functions';
import El from './El';

function location(className) {
  let locationDiv = El({
    element: 'div',
    dataset: { lacation: 'location' },
    id: 'location',
    className: `${className} location justify-center  backdrop-blur-sm bg-slate-300 bg-opacity-30 text-white text-2xl py-2`,
  });
  CurrentData().then((data) => {
    renderLocation(data, locationDiv);
  });
  return locationDiv;
}

export function renderLocation(data, elem) {
  elem.innerHTML = '';
  elem.appendChild(
    El({
      element: 'span',
      className: 'p-1',
      child: ` ${data.name}`,
    })
  );
}

export default location;
