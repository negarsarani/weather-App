import El from './El';

export function HistoryLi(city , country) {
  return El({
    element: 'div',
    className:
      'backdrop-blur-sm bg-[#6b7280] hover:bg-[#9ca3af] bg-opacity-30 text-white flex justify-center p-1 rounded-2xl cursor-pointer hover:text-slate-900',
    child: [
      El({
        element: 'span',
        child: `${city} , ${country}`,
      }),
    ],
  });
}
