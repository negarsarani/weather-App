import El from '../../../../library/El';
import { ListItems } from './List';
import { debounce } from 'lodash/function.js';
import { searchValue } from './functions';

export function Search() {
  return El({
    element: 'div',
    className:
      ' flex  items-end w-full items-end  lg:justify-center justify-start lg:w-8/12 lg:pl-0 pl-10  ',
    child: El({
      element: 'div',
      className: 'md:w-6/12 xl:w-6/12 lg:w-8/12   sm:w-7/12 w-10/12 relative ',
      child: [
        El({
          element: 'input',
          className:
            'bg-backdrop-blur-sm bg-slate-300 bg-opacity-60 outline-none placeholder:text-white text-white p-2 px-3 w-full rounded-3xl shadow-md cursor-pointer z-20 ',
          placeholder: 'Search your city...',
          eventListener: [
            {
              event: 'keyup',
              callback: debounce(searchValue, 1000),
            },
          ],
          onclick: function name() {
            ListItems();
          },
        }),
        El({
          element: 'div',
          id: 'list-items',
          className: ' absolute w-full flex items-center justify-center z-0 ',
          child: El({
            element: 'div',
            className: 'bg-[#2c3333] w-10/12 text-white rounded-b-md ',
            child: [
              El({
                element: 'ul',
                className: 'flex w-full p-5 flex-col',
                child: [
                  
                ],
              }),
              El({
                element: 'div',
                className:
                  'w-full cursor-pointer flex  gap-2 hover:bg-[#49484e] justify-center p-2 py-4 rounded-b-md ',
                child: [
                  El({
                    element: 'span',
                    child: 'Clear All ',
                  }),
                  El({
                    element: 'img',
                    className: 'w-[1.2rem] h-[1.2rem]',
                    src: './src/styles/assets/svgs/trash2.svg',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
