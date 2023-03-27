import El from '../../library/El';
import { submit } from './functions';

export function FormPage() {
  return El({
    element: 'div',
    className: 'h-full w-full backdrop-blur-sm bg-slate-300 bg-opacity-30 flex items-center justify-center ',
    child: El({
      element: 'div',
      className: 'bg-white bg-backdrop-blur-sm bg-slate-300 bg-opacity-30 ',
      child: El({
        element:"div",
        className:"",
        child:[
          El({
            element:"div",
            className:"",
            child:""
          })
        ],
      })
    }),
  });
  // return El({
  //   element: 'form',
  //   id:"form",
  //   onsubmit: submit,
  //   child: [
  //     El({
  //       element: 'div',
  //       className: 'mb-6',
  //       child: [
  //         El({
  //           element: 'lable',
  //           for: 'email',
  //           className:
  //             'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
  //           child: 'Your email',
  //         }),
  //         El({
  //           element: 'input',
  //           id: 'email',
  //           type: 'email',
  //           className:
  //             'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  //           placeholder: 'name@flowbite.com',
  //           required: true,
  //         }),
  //       ],
  //     }),
  //     El({
  //       element: 'div',
  //       className: 'mb-6',
  //       child: [
  //         El({
  //           element: 'lable',
  //           for: 'password',
  //           className:
  //             'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
  //           child: 'Your password',
  //         }),
  //         El({
  //           element: 'input',
  //           id: 'password',
  //           type: 'password',
  //           className:
  //             'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  //           required: true,
  //         }),
  //       ],
  //     }),
  //     El({
  //       element: 'div',
  //       className: 'flex items-start mb-6',
  //       child: [
  //         El({
  //           element: 'div',
  //           className: 'flex items-center h-5',
  //           child: El({
  //             element: 'input',
  //             id: 'remember',
  //             className:
  //               'w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800',
  //             type: 'checkbox',
  //             required: 'true',
  //           }),
  //         }),
  //         El({
  //           element: 'lable',
  //           for: 'remember',
  //           className:
  //             'ml-2 text-sm font-medium text-gray-900 dark:text-gray-300',
  //           child: 'Remember me',
  //         }),
  //       ],
  //     }),
  //     El({
  //       element: 'button',
  //       type: 'submit',
  //       className:
  //         'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  //       child: 'Submit',
  //     }),
  //   ],
  // });
}
