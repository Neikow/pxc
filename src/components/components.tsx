import { navigate } from 'gatsby';
import * as React from 'react';

export const Card = (
  p: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => (
  <div
    {...p}
    className={
      'm-2 min-w-min rounded-xl bg-white p-4 shadow-lg' +
      (p.className ? ` ${p.className}` : '')
    }
  >
    {p.children}
  </div>
);

export const Button = (
  p: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <button
    {...p}
    className={
      'rounded-xl border border-gray-900 p-2 px-8 transition-colors hover:border-blue-700 hover:text-blue-700' +
      (p.className ? ` ${p.className}` : '')
    }
  >
    {p.children}
  </button>
);

export const AlbumCard: React.FC<{
  id: string;
  title: string;
  year?: string;
  count: number;
}> = (p) => {
  const holdTimeout = 500;
  let timer: number;

  return (
    <div className='flex h-1/3 w-full flex-shrink-0 p-4 md:w-5/6 lg:w-4/6 xl:w-3/6'>
      <button
        onTouchStart={() => {
          timer = window.setTimeout(function () {
            alert('Hello');
          }, holdTimeout);
        }}
        onTouchEnd={() => {
          window.clearTimeout(timer);
        }}
        onTouchCancel={() => {
          window.clearTimeout(timer);
        }}
        onClick={() => navigate(`/albums/${p.id}`)}
        className='group relative flex w-full flex-row items-center justify-between rounded-lg bg-white shadow-lg outline-blue-500 transition-colors hover:bg-blue-200'
      >
        <div className='relative flex h-full w-full flex-col items-start p-4'>
          <div className='flex h-full w-1/2 flex-col items-start justify-center'>
            <h3 className='text-2xl'>{p.title}</h3>
            <h4 className='text-lg'>{p.title !== p.year && p.year}</h4>
          </div>

          <div className='absolute bottom-4 right-4'>{p.count} Photos</div>
        </div>

        <img
          className='h-full w-full rounded-r-lg object-cover transition-opacity group-hover:opacity-80 lg:w-2/3'
          src={`https://source.unsplash.com/featured/300x200?${p.id}`}
          alt={p.id + '-cover'}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            alert('Hello');
          }}
          className='absolute right-2 top-2 hidden h-8 w-8 rounded-full bg-white p-1 opacity-0 group-hover:opacity-100 md:block'
        >
          <svg
            clip-rule='evenodd'
            fill-rule='evenodd'
            stroke-linejoin='round'
            stroke-miterlimit='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='m12 16.495c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z' />
          </svg>
        </button>
      </button>
    </div>
  );
};
