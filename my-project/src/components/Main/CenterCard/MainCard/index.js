import El from '../../../../library/El';
import { CurrentData } from './functions';

export function MainCard(data = 'tehran') {
  // let obj;
  const card = El({
    element: 'div',
    child: '',
    id: 'card',
  });
  CurrentData(data).then((data) => {
    render(data, card);
    console.log(data);
  });
  return card;
  // console.log(obj);
  // }
  //  return  aa().map((item) => console.log(item));
  // console.log('end');
  //  let s = data.map( item =>{
  // return item[0]

  // })
  // console.log(s);
  //  let x = CurrentData().then((res) => {
  //       return El({
  //         element: 'span',
  //         className: 'bg-red-300',
  //         child: 'NEGAR',
  //       });
  //   });
}
export function render(arr, elem) {
  // let data = arr;
  // console.log(data);
  //  let ss = data
  //  console.log(...data);
  elem.innerHTML = ""
  
  elem.appendChild(
    El({
      element: 'div',
      className:
        'backdrop-blur-sm bg-slate-300 bg-opacity-30 text-white flex flex-col items-center justify-center px-10 pb-9 pt-5 gap-4 rounded-[1.2rem]',
      child: [
        El({
          element: 'div',
          className: 'flex flex-col items-center justify-center',
          child: [
            El({
              element: 'span',
              className: 'text-[4rem]',
              child: `${arr.temp} C`,
            }),
            El({
              element: 'span',
              className: 'text',
              child: `${arr.status}`,
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'text flex gap-5',
          child: [
            El({
              element: 'div',
              className: 'flex flex-col items-center justify-center',
              child: [
                El({
                  element: 'span',
                  className: 'text-[1.2rem]',
                  child: `${arr.feels} C`,
                }),
                El({
                  element: 'span',
                  className: 'opacity-50 text-[.9rem]',
                  child: 'RealFeel',
                }),
              ],
            }),
            El({
              element: 'div',
              className: 'flex flex-col items-center justify-center',
              child: [
                El({
                  element: 'span',
                  className: 'text-[1.2rem]',
                  child: `${arr.humid}%`,
                }),
                El({
                  element: 'span',
                  className: 'opacity-50 text-[.9rem]',
                  child: 'Humidity',
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
// console.log(MainCard());
