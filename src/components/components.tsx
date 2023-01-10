import { navigate } from 'gatsby';
import * as React from 'react';

export const Card = ( p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> ) => (
  <div {...p} className={'bg-white m-2 rounded-xl p-4 shadow-lg min-w-min' + ( p.className ? ` ${ p.className }` : '' )}>
    {p.children}
  </div>
);

export const Button = ( p: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> ) => (
  <button {...p} className={'p-2 border border-gray-900 rounded-xl hover:border-blue-700 hover:text-blue-700 transition-colors px-8' + ( p.className ? ` ${ p.className }` : '' )} >
    {p.children}
  </button>
);

export const AlbumCard: React.FC<{ id: string; title: string; year?: string; count: number; }> = ( p ) => {
  const holdTimeout = 500;
  let timer: number;

  return ( <div className='flex flex-shrink-0 h-1/3 w-full md:w-5/6 lg:w-4/6 xl:w-3/6 p-4'>
    <button onTouchStart={() => {
      timer = window.setTimeout( function () {
        alert( 'Hello' );
      }, holdTimeout );
    }} 
    onTouchEnd={() => {
      window.clearTimeout( timer );
    }}
    onTouchCancel={() => {
      window.clearTimeout( timer );
    }}
    onClick={() => navigate( `/albums/${ p.id }` )} className='w-full relative bg-white flex flex-row justify-between group outline-blue-500 items-center shadow-lg rounded-lg hover:bg-blue-200 transition-colors'>
      <div className='flex relative h-full w-full flex-col p-4 items-start'>
        <div className='flex h-full flex-col items-start justify-center'>
          <h3 className='text-2xl'>
            {p.title}
          </h3>
          <h4 className='text-lg'>
            {p.title !== p.year && p.year}
          </h4>
        </div>

        <div className='absolute bottom-4 right-4'>{p.count} Photos</div>
      </div>

      <img className='h-full rounded-r-lg group-hover:opacity-80 transition-opacity' src={`https://source.unsplash.com/featured/300x200?${ p.id }`} alt={p.id + '-cover'} />

      <button onClick={( e ) => { e.stopPropagation(); e.preventDefault(); alert( 'Hello' ); }} className='hidden md:block absolute opacity-0 group-hover:opacity-100 right-2 top-2 w-8 h-8 p-1 rounded-full bg-white'>
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.495c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z" /></svg>
      </button>
    </button>
  </div> );
};
