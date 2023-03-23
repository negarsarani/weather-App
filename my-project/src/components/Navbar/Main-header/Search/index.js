import El from '../../../../library/El';
import { MainCard  , render} from '../../../Main/CenterCard/MainCard';
import { CurrentData } from '../../../Main/CenterCard/MainCard/functions';
// import { RenderMainCard } from '../../../Main/CenterCard/MainCard/functions';

export function Search() {
  return El({
    element: 'div',
    className:
      ' flex items-center w-full items-center  sm:justify-center justify-start   lg:pr-32 pl-10 sm:pl-0',
    child: El({
      element: 'input',
      className:
        'backdrop-blur-sm bg-slate-300 bg-opacity-60 outline-none placeholder:text-white text-white p-2 px-3 md:w-6/12 xl:w-6/12 lg:w-8/12  sm:w-7/12 w-10/12 rounded-3xl shadow-md ',
      placeholder: 'Search your city...',
      onchange: function name(e) {
        const value = e.target.value;
        // console.log(value);
        // const card = El({
        //   element: 'div',
        //   child: '',
        //   id: 'card',
        // });
        const card = document.getElementById('card');
        console.log(card);
        CurrentData(value).then((data) => {
          console.log(data);
          render(data, card);
          console.log(data);
        });
      },
    }),
  });
}
