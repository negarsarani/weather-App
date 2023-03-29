import El from './El';

export function Loading(item) {
  item.innerHTML = '';
  return El({
    element: 'div',
    className:
      'flex items-center justify-center inset-0 backdrop-blur-sm bg-slate-300 bg-opacity-30 border p-3 px-7 border-gray-100 rounded-lg shadow-md',
    child: El({
      element: 'div',
      className: 'flex gap-1 flex-col items-center justify-center',
      role: 'status',
      child: [
        El({
          element: 'img',
          className:"w-10 h-10",
          src: './src/styles/assets/svgs/three-dots.svg',
        }),
        El({
          element: 'span',
          className: 'text-md text-gray-800',
          child: 'Loading...',
        }),
      ],
    }),
  });
}
export function openLoading() {
  const loading = document.getElementById('loading');
  loading.append(Loading(loading));
  loading.classList.remove('invisible');
}
export function closeLoading() {
  const loading = document.getElementById('loading');
  loading.append(Loading(loading));
  loading.classList.add('invisible');
}
