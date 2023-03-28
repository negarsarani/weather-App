import El from '../../library/El';
import { Route } from '../../routes';
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
                child: 'Sign up',
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
           
          }),
        ],
      }),
    }),
  });
  function changeForm(e) {
    const form = document.getElementById('form');
    const targetText = e.target.innerText;
    // console.log(ra);
    targetText === 'Sign up'
      ? history.pushState(null, null, '/signup')
      : targetText === 'Login'
      ? history.pushState(null, null, '/login')
      : null;
      Route()
  }
}
