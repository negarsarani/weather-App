import El from '../../library/El';
import { submit } from './functions';
import { Login } from './Login';
import { SingUp } from './Signup';

export function FormPage() {
  // Login()
  return El({
    element: 'div',
    className:
      'h-full w-full backdrop-blur-sm bg-slate-300 bg-opacity-30 flex items-center justify-center ',
    child: El({
      element: 'div',
      className: 'bg-white bg-backdrop-blur-sm bg-slate-300 bg-opacity-30 ',
      child: El({
        element: 'div',
        className: 'flex flex-col gap-10 items-center justify-center  p-10',
        child: [
          El({
            element: 'div',
            className: 'flex gap-5 text-[#354458] font-Lobster',
            child: [
              El({
                element: 'button',
                className: 'hover:text-black hover:text-xl ',
                child: 'Sing up',
                eventListener: [
                  {
                    event: 'click',
                    callback: changeForm,
                  },
                ],
              }),
              El({
                element: 'span',
                child: '/',
              }),
              El({
                element: 'button',
                className: 'hover:text-black hover:text-xl ',
                child: 'Login',
                eventListener: [
                  {
                    event: 'click',
                    callback: changeForm,
                  },
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'form ',
            id: 'form',
            child: El({
              element: 'div',
              className:
                'flex flex-col items-center text-xl  gap-2 font-Lobster',
              child: [
                El({
                  element: 'p',
                  className: 'text-3xl',
                  child: 'Wellcome ',
                }),
                El({
                  element: 'p',
                  className: '',
                  child: 'This is weather Api Website :)',
                }),
                El({
                  element: 'p',
                  className: 'text-[#354458]',
                  child: ' please login or sign up',
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
  function changeForm(e) {
    const form = document.getElementById('form');
    const targetText = e.target.innerText;
    targetText === 'Sing up'
      ? SingUp(form)
      : targetText === 'Login'
      ? Login(form)
      : null;
  }
}
